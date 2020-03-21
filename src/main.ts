import { NestFactory } from '@nestjs/core'
import {FastifyAdapter,
    NestFastifyApplication,} from '@nestjs/platform-fastify'
import { AppModule } from './app'
import { ConfigService } from '@nestjs/config'

import { MyLogger } from 'logger/service'

// async function bootstrap() {


//     const app = await NestFactory.create(AppModule, {
//         logger: false
//     })

//     app.useLogger(new MyLogger())


//     const configService = app.get(ConfigService)
//     const BACKEND_PORT = configService.get('BACKEND_PORT')
//     await app.listen(BACKEND_PORT)
// }

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger : false
        })
    )

    app.useLogger(new MyLogger())

    const configService = app.get(ConfigService)
    const BACKEND_PORT = configService.get('BACKEND_PORT')
    await app.listen(BACKEND_PORT)
}




bootstrap()
