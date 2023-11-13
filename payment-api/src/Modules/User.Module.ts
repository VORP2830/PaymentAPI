import { Module } from '@nestjs/common';
import { UserController } from 'src/Controllers/User.Controller';
import { UserService } from 'src/Services/User.Service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}