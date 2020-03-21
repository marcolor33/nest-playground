import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { readFileSync } from 'fs'
import { DynamicConfig } from 'interface/dynamicConfig'
import path = require('path')
import { MyLogger } from 'logger/service'

@Injectable()
export class SystemConfigService {
    constructor(
        private readonly mylogger : MyLogger,
        private readonly configService: ConfigService
    ) {
        this.mylogger.setContext('SystemConfigService')

    }

    getEnvConfig(propertyPath: string) {
        return this.configService.get(propertyPath)
    }

    async getDynamicCofig(): Promise<DynamicConfig> {

        // this.mylogger.log('getting config')

        console.log('get config')

        const filePath = path.resolve('config', 'dynamicConfig.json')
        const dumb = await readFileSync(filePath, 'utf-8')
        const dynamicConfig = JSON.parse(dumb) as DynamicConfig

        return dynamicConfig
    }
}
