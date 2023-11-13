import { Module } from '@nestjs/common';
import { UserController } from 'src/Controllers/User.Controller';
import { UserRepository } from 'src/Repositories/User.Repository';
import { UserService } from 'src/Services/User.Service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}