
import * as mime from 'mime-types'

// this part should only contain the FileData, information like fileName,filePath should not be here
interface FileData {

    mimeType: string
    extension: string

    // warning : this part should not contain the header/mimeType
    dataString: string
    encoding : BufferEncoding

}

interface File {
    fileName: string
    fileData: FileData
}

interface FileWithPathInfo extends File {
    fullPath : string

    fileName : string
    extension : string
    

}


async function bufferToFileData(buffer : Buffer,extension : string,encoding = 'base64') {

    const dataString = buffer.toString(encoding)
    const mimeType = mime.types[extension]

    return {
        mimeType,
        extension,
        dataString,
        encoding
    } as FileData

}

async function fileDataToBuffer(fileData : FileData) {

    const buffer =  Buffer.from(fileData.dataString,fileData.encoding)
    return buffer

}

async function base64StringToFileData(base64String : string,encoding = 'base64') {

    const base64Header = base64String.split(';')[0].split('data:')[1]
    const base64DataString = base64String.split(',')[1]

    const buffer = Buffer.from(base64DataString,'base64')
    const extension = mime.extension(base64Header)

    return bufferToFileData(buffer,extension,encoding)
}

async function getMime() {
    return mime.lookup()
}


export {
    FileData,
    File
}


