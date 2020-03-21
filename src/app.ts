import { Module, HttpModule } from '@nestjs/common'

import { AuthModule } from 'auth'
import { UserModule } from 'service/user'

import { DumbController } from 'controllers/dumb.controller'
import { TestController } from 'controllers/test.controllers'
import { LoggerModule } from 'logger'
import { OutboundModule } from 'outbound'




@Module({
    // defined all Module here
    imports: [

        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        OutboundModule,
        LoggerModule,
        AuthModule,
        UserModule
    ],

    // define All Controller here
    controllers: [DumbController, TestController],
})

// App Module that will be import in main
export class AppModule {}
