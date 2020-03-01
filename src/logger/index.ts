import { Module } from '@nestjs/common'
import { MyLogger } from './service'

@Module({
    providers: [MyLogger],
    exports: [MyLogger],
})
export class LoggerModule {}
