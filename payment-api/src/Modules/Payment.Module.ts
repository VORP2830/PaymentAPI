import { Module } from '@nestjs/common';
import { PaymentController } from 'src/Controllers/Payment.Controller';
import { PaymentService } from 'src/Services/Payment.Service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}