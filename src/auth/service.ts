import { Injectable } from '@nestjs/common'
import { SystemConfigService } from 'systemConfig/service'

@Injectable()
export class AuthService {
    constructor(private readonly systemConfigService: SystemConfigService) {}

    async loginUser() {
        return undefined
    }

    getHello(): string {
        return 'Hello World!'
    }
}
