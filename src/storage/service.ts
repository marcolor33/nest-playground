import { Injectable } from '@nestjs/common'
import { BaseStorageHander } from './handler/base'

@Injectable()
export class StorageService {
    getHandler(): BaseStorageHander {
        return new BaseStorageHander()
    }

    getHello(): string {
        return 'Hello World!'
    }
}
