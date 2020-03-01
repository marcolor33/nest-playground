import { Module, Global } from '@nestjs/common'
import { UserService } from './service'
import { AuthModule } from 'auth'
import { UserController } from './controller'

@Module({
    imports: [AuthModule],
    controllers: [UserController],
    providers: [AuthModule, UserService],
    exports: [AuthModule, UserService],
})

// App Module that will be import in main
export class UserModule {}
