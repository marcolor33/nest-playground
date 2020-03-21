import Axios, { AxiosRequestConfig, AxiosInstance, AxiosError, AxiosResponse } from 'axios'

interface HttpResponse<T = any> {
    success: boolean,
    config : AxiosRequestConfig


    // response part
    statusCode: number,
    headers: any,
    data: T
}

interface HttpError<T> extends HttpResponse<T> {

    rawError: any
    errorMessage: string
    errorCode: string

    // since we don't know what data might be, set type to any
    data: any


}


export default class HttpInstance {

    private axiosInstance: AxiosInstance

    constructor(axiosRequestConfig?: AxiosRequestConfig) {
        this.axiosInstance = Axios.create(axiosRequestConfig)
    }

    async send<T = any>(axiosRequestConfig: AxiosRequestConfig): Promise<HttpResponse<T>> {

        try {

            const response = await this.axiosInstance(axiosRequestConfig)


            const { data, headers, status,config } = response
            return {
                success: true,
                statusCode: status,
                config,
                headers,
                data

            }

        } catch (rawError) {

            const {
                config,
                response,
                code
            } = rawError as AxiosError


            return {
                success: false,
                rawError,
                errorMessage: rawError.message,
                errorCode: code,
                config,


                // get data/header if response exists
                ...(
                    response ? {
                        data: response.data,
                        headers: response.headers
                    } : {
                    }
                )


            } as HttpError<T>
        }
    }

}


export {
    HttpInstance,
    HttpResponse,
    HttpError
}