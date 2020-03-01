import { Controller, Get } from '@nestjs/common'
import { AuthService } from 'auth/service'

@Controller('dumb')
export class DumbController {
    constructor(private readonly authService: AuthService) {}

    @Get('test')
    getHello(): string {
        return 'dumb'
    }
}
