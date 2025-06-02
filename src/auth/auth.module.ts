import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, JwtModule.registerAsync({
    useFactory: (configService: ConfigService) => ({
      secret: configService.getOrThrow('JWT_SECRET'),
      signOptions: {
        expiresIn: Number(configService.getOrThrow('JWT_EXPIRATION'))
      }
    }),
    inject: [ConfigService],
  })], // Imports from every Modules, para makuha yung mga exports from it.
  providers: [AuthService, LocalStrategy], controllers: [AuthController]
})
export class AuthModule {}
