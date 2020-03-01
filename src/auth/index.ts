import { Module, Global } from '@nestjs/common'
import { SystemConfigModule } from 'systemConfig'
import { AuthService } from './service'
import { AuthController } from './controller'

@Module({
    imports: [SystemConfigModule],
    controllers: [AuthController],
    providers: [AuthService, SystemConfigModule],
    exports: [AuthService, SystemConfigModule],
})

// App Module that will be import in main
export class AuthModule {}
