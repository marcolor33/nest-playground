import { BaseStorageHander } from './base'

export class S3StorageHander extends BaseStorageHander {
    constructor() {
        super()
    }

    getHello(): string {
        return 'Hello World!'
    }
}
