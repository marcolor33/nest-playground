// the root is not in src/utils/tsCompiler
import { HttpInstance } from './http'
import { AxiosRequestConfig } from 'axios'



async function dynamicTest() {

    const axiosConfig = {

        url : 'http://localhost:3000/test/cats',
        method : 'GET'
    } as AxiosRequestConfig

    return await new HttpInstance().send(axiosConfig)

}


export default {dynamicTest}

