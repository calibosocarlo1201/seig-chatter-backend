import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule], // Imports from every Modules, para makuha yung mga exports from it.
  providers: [AuthService, LocalStrategy], controllers: [AuthController]
})
export class AuthModule {}
