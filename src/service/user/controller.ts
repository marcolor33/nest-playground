import { Controller, Get, Injectable } from '@nestjs/common'
import { UserService } from './service'
import { AuthService } from 'auth/service'

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {}

    @Get('test')
    async getHello(): Promise<string> {
        const p1 = new Promise(resolve => resolve('answer1'))
        const p2 = new Promise(resolve => resolve('answer2'))
        const p3 = new Promise((resolve, reject) => reject('failed answer3'))

        try {
            const d = await p3
        } catch (error) {
            console.log(error)
        }

        console.log('here')

        const dumb = await Promise.allSettled([p1, p2, p3])
        console.log(dumb)

        return 'a'
    }
}
