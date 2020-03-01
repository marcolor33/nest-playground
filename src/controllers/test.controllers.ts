import { Controller, Get } from '@nestjs/common'
import { UserService } from 'service/user/service'
import { SystemConfigService } from 'systemConfig/service'

@Controller('test')
export class TestController {
    constructor(
        private readonly userService: UserService,
        private readonly systemConfigService: SystemConfigService
    ) {}

    @Get('test')
    async getHello() {
        const dumb = await this.systemConfigService.getDynamicCofig()
        console.log(dumb)

        throw new Error('aa')

        return 'test'
    }
}
