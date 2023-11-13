import { Module } from '@nestjs/common';
import { HealthController } from './Controllers/Health.Controller';
import { UserModule } from './Modules/User.Module';
import { PaymentModule } from './Modules/Payment.Module';

@Module({
  imports: [UserModule, PaymentModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
