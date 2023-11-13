import { Module } from '@nestjs/common';
import { PaymentController } from 'src/Controllers/Payment.Controller';
import { PaymentRepository } from 'src/Repositories/Payment.Repository';
import { PaymentService } from 'src/Services/Payment.Service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository],
})
export class PaymentModule {}