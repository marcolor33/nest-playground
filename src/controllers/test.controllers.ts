import { Controller, Get, HttpService, NotImplementedException } from '@nestjs/common'
import { UserService } from 'service/user/service'
import { SystemConfigService } from 'systemConfig/service'
import { MyLogger } from 'logger/service'
import moment = require('moment')
import { OutboundService } from 'outbound/service'
import { AxiosRequestConfig } from 'axios'

import { dynamicRun } from 'utils/tsCompiler'
import path = require('path')
import { readFileSync } from 'fs'

@Controller('test')
export class TestController {
    constructor(
        private readonly httpService: HttpService,
        private readonly userService: UserService,
        private readonly systemConfigService: SystemConfigService,
        private readonly outboundService: OutboundService,
        private readonly myLogger : MyLogger
    ) {

        this.myLogger.setContext('testController')
    }


    @Get('compile')
    async compile() {

        const filePath = 'external/test.ts'
        const resolveFilePath = path.resolve(filePath)

        const fileContent = readFileSync(resolveFilePath).toString()
        

        const { dynamicTest } = await dynamicRun(fileContent)

        console.log(dynamicTest)

        const result = await dynamicTest()

        console.log(result)


        return 'ads'
    }


    @Get('outbound')
    async testOutbound() {

        const config = {
            url : 'http://localhost:3000/test/cats',
            method : 'get'
        } as AxiosRequestConfig

        const result =  await this.outboundService.send(config)


        return result




    }

    @Get('test')
    async getHello() {
        
        const result = await Promise.allSettled([

            this.systemConfigService.getDynamicCofig(),
            this.systemConfigService.getDynamicCofig()

        ])

        console.log(result)

        const dumb = await this.systemConfigService.getDynamicCofig()

        const time1 = '2020-03-04T19:32:04.952+08:00'
        const time2 = '2020-03-04T11:32:04.952Z'

        console.log(moment(time1).format())
        console.log(moment(time2).format())


        throw new Error('something worng')

        return 'test'
    }


    @Get('cats')
    getCats() {

        return new NotImplementedException()

        // const cats = [
        //     {
        //         name : 'cat1',
        //         size : 1
        //     },
        //     {
        //         name : 'cat2',
        //         size : 2
        //     }
        // ]

        // return cats
    }
}
