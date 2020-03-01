import { BaseStorageHander } from './base'

export class SftpStorageHander extends BaseStorageHander {
    constructor() {
        super()
    }

    getHello(): string {
        return 'Hello World!'
    }
}
