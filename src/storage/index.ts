import { Module } from '@nestjs/common'
import { StorageService } from './service'

@Module({
    imports: [],
    providers: [StorageService],
})
export class StorageModule {}
