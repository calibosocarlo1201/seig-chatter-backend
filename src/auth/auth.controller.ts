import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { Users } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(
        @CurrentUser() user: Users
        @Res({passthrough: true})
    ){

    }
}

