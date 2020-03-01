import { Controller, Get, Injectable } from '@nestjs/common'
import { AuthService } from './service'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('test')
    getHello(): string {
        return 'test'
    }
}
