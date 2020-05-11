import { Injectable } from '@nestjs/common'
import { MyLogger } from 'logger/service'


import { HttpInstance, HttpError, HttpResponse,AxiosRequestConfig } from 'utils/http'


@Injectable()
export class OutboundService {

    constructor(
        private readonly logger: MyLogger
    ) {

        this.logger.setContext('outboundService')
    }

    private async createOutboundLog(response: HttpResponse) {

        const url = response.config.url
        const success = response.success

        console.log()
    }

    async send<T = any>(axiosRequestConfig: AxiosRequestConfig): Promise<T> {

        const httpResponse =  await this.rawSend<T>(axiosRequestConfig)

        if (!httpResponse.success) {
            throw new Error('garanteeSend cannot get result')
        }

        return httpResponse.data

    }

    async rawSend<T = any>(axiosRequestConfig: AxiosRequestConfig): Promise<HttpResponse<T>> {


        const httpInstance = new HttpInstance()
        const response = await httpInstance.send(axiosRequestConfig)

        this.createOutboundLog(response)

        if (!response.success) {
            this.logger.error('Outbound fail')
            this.logger.error(axiosRequestConfig)
            this.logger.error(response)

            // remove rawError to avoid revealing sensitive information such as local machine path
            delete (response as HttpError<T>).rawError

        } else {
            this.logger.log('Outbound success')
            this.logger.log(axiosRequestConfig)
            this.logger.log(response)
        }

        return response

    }


}
