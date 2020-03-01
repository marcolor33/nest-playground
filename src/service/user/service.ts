import { Injectable } from '@nestjs/common'
import { AuthService } from 'auth/service'

@Injectable()
export class UserService {
    constructor(private readonly authService: AuthService) {}

    async loginUser() {
        return await this.authService.loginUser()
    }

    getHello(): string {
        return 'Hello World!'
    }
}
