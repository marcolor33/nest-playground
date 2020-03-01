import { NestFactory } from '@nestjs/core'
import { AppModule } from './app'
import { ConfigService } from '@nestjs/config'

import { MyLogger } from 'logger/service'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: false,
    })

    app.useLogger(app.get(MyLogger))

    const configService = app.get(ConfigService)
    const BACKEND_PORT = configService.get('BACKEND_PORT')
    await app.listen(BACKEND_PORT)
}
bootstrap()
