import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersRepository } from './users.repository';
import { DatabaseModule } from 'src/common/database/database.module';
import { Users, UserEntity  } from './entities/user.entity';

@Module({
  imports: [DatabaseModule.forFeature([
    { name: Users.name, schema: UserEntity }
  ])],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService],
})

export class UsersModule {}
