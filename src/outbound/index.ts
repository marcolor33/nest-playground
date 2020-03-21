import { Module } from '@nestjs/common'
import { OutboundService } from './service'
import { LoggerModule } from 'logger'

@Module({
    imports: [LoggerModule],
    providers: [LoggerModule,OutboundService],
    exports : [LoggerModule,OutboundService]
})
export class OutboundModule {}
