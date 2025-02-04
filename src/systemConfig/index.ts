import { Module, Global } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SystemConfigService } from './service'
import { LoggerModule } from 'logger'

@Global()
@Module({
    imports: [
        LoggerModule,
        ConfigModule.forRoot({
            // get process.env.NODE_ENV first, then read the corrisponding .env file to get the rest
            // use .env if rocess.env.NODE_ENV is not given
            envFilePath: 'config/.env',

            expandVariables: true,
        }),
    ],
    exports: [ConfigModule, SystemConfigService],
    providers: [LoggerModule,ConfigModule, SystemConfigService],
})

// App Module that will be import in main
export class SystemConfigModule {}
