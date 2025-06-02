import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { Users } from 'src/users/entities/user.entity';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly configService: ConfigService, private readonly jwtService: JwtService) {}

    async login(user: Users, response: Response){
        try {
            const expires = new Date();
            expires.setSeconds(
                expires.getSeconds() + this.configService.getOrThrow<number>('JWT_EXPIRATION')
            )

            const tokenPayload: TokenPayload = {
                _id: user._id.toHexString(),
                email: user.email,
            };

            const token = this.jwtService.sign(tokenPayload);

            response.cookie('Authentication', token, {
                httpOnly: true,
                expires
            })

            return {message: 'Login Success'};
        } catch (error) {
            console.error('Authentication login error:', error)
            throw error
        }
    }
}
