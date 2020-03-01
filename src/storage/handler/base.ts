export interface FileData {
    fileBuffer: Buffer
    base64String: string
}

export interface StorageFileInfo {
    fileDirectory: string
    fileFullPath: string
    fileName: string
    fileExtension: string
    fileType: string
}

export interface StorageFileInfo2 {
    dateModified: string
}

export class BaseStorageHander {
    handlerType: string
    handlerConfig: any

    // constructor() {
    // }

    // async startConn(){

    // }

    // async closeConn(){

    // }

    async list(path: string) {
        throw new Error('cannot call from base handler')
    }

    async upload(path: string, file: any) {
        throw new Error('cannot call from base handler')
    }

    async download(path: string) {
        throw new Error('cannot call from base handler')
    }

    async copy(path1: string, path2: string) {
        throw new Error('cannot call from base handler')
    }

    async move(path1: string, path2: string) {
        throw new Error('cannot call from base handler')
    }

    async delete(path: string) {
        const dumb = () => {
            return ''
        }
        throw new Error('cannot call from base handler')
    }
}
