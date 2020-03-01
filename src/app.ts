import { Module } from '@nestjs/common'

import { AuthModule } from 'auth'
import { UserModule } from 'service/user'

import { DumbController } from 'controllers/dumb.controller'
import { TestController } from 'controllers/test.controllers'
import { LoggerModule } from 'logger'

@Module({
    // defined all Module here
    imports: [LoggerModule, AuthModule, UserModule],

    // define All Controller here
    controllers: [DumbController, TestController],
})

// App Module that will be import in main
export class AppModule {}
