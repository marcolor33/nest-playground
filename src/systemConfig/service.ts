import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { readFileSync } from 'fs'
import { DynamicConfig } from 'interface/dynamicConfig'
import path = require('path')

@Injectable()
export class SystemConfigService {
    constructor(private readonly configService: ConfigService) {}

    getEnvConfig(propertyPath: string) {
        return this.configService.get(propertyPath)
    }

    async getDynamicCofig(): Promise<DynamicConfig> {
        const filePath = path.resolve('config', 'dynamicConfig.json')
        const dumb = await readFileSync(filePath, 'utf-8')
        const dynamicConfig = JSON.parse(dumb) as DynamicConfig

        return dynamicConfig
    }
}
