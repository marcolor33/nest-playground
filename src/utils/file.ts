
import * as mime from 'mime-types'


interface BaseFileData {

    mimeType: string
    extension: string

}

interface FileBufferData extends BaseFileData{
    buffer : Buffer
}

// this part should only contain the FileData, information like fileName,filePath should not be here
interface FileData extends BaseFileData{

    // warning : this part should not contain the header/mimeType
    dataString: string
    encoding : BufferEncoding // mark down how it encoded
}

interface File {
    fileName: string
    fileData: FileData
}

interface FileWithPathInfo extends File {
    fullPath : string
    fileName : string

}



function bufferToFileData(buffer : Buffer,extension : string,encoding = 'base64') {

    const dataString = buffer.toString(encoding)
    const mimeType = mime.types[extension]

    return {
        mimeType,
        extension,
        dataString,
        encoding
    } as FileData

}

function fileDataToBuffer(fileData : FileData) {

    const buffer =  Buffer.from(fileData.dataString,fileData.encoding)
    return buffer

}

function fileDataToFileBufferData(fileData : FileData) : FileBufferData {

    const { mimeType, extension } = fileData
    const buffer = fileDataToBuffer(fileData)

    const result = {
        mimeType,
        extension,
        buffer 
    } as FileBufferData

    return result

}



function base64StringToFileData(base64String : string,encoding = 'base64') {

    const base64Header = base64String.split(';')[0].split('data:')[1]
    const base64DataString = base64String.split(',')[1]

    const buffer = Buffer.from(base64DataString,'base64')
    const extension = mime.extension(base64Header)

    return bufferToFileData(buffer,extension,encoding)
}


// get mimeType, will return undefined
function extensionToMimeType(extension: string) {
    return mime.lookup(extension)
}

// get extension, will return undefined
function mimeTypeToExtension(mimeType: string) {
    return mime.extension(mimeType)
}


export {
    FileData,
    File,
    FileWithPathInfo,
    extensionToMimeType,
    mimeTypeToExtension,
    
}


