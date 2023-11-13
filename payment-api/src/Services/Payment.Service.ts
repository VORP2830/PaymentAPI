import { Injectable } from "@nestjs/common";
import { Payment, Status } from "@prisma/client";
import { PaymentException } from "src/Exceptions/Excption";
import { PaymentRepository } from "src/Repositories/Payment.Repository";


@Injectable()
export class PaymentService {
    constructor(private readonly paymentRepository: PaymentRepository) { 
        setInterval(() => this.updateStatus(), 30000);
    }

    async getById(id: number): Promise<Payment> {
        return await this.paymentRepository.getById(id);
    }

    async getByStatus(status: Status): Promise<Payment[]> {
        return await this.paymentRepository.getByStatus(status);
    }

    async create(data: Payment): Promise<Payment> {
        if(data.date < new Date()) throw new PaymentException("Pagamento não realizado. Não é possivel realizar um pagamento com data retroativa");
        if(data.date == new Date()) data.status == "PAID";
        if(data.date > new Date()) data.status == "PENDING";
        return await this.paymentRepository.create(data);
    }

    async update(data: Payment): Promise<Payment> {
        const payment = await this.paymentRepository.getById(data.id);;
        if(payment == null) throw new PaymentException("Pagamento não encontrado");
        if(payment.date >= new Date()) throw new PaymentException("Pagamento não pode ser atualizado pois já foi realizado");
        if(payment.status == "PAID") throw new PaymentException("Pagamento não pode ser atualizado pois já foi realizado");
        if(data.date == new Date()) data.status == "PAID";
        if(data.date > new Date()) data.status == "PENDING";
        return await this.paymentRepository.update(data);
    }

    async delete(id: number): Promise<Payment> {
        const payment = await this.paymentRepository.getById(id);;
        if(payment == null) throw new PaymentException("Pagamento não encontrado");
        if(payment.date >= new Date()) throw new PaymentException("Pagamento não pode ser deletado pois já foi realizado");
        if(payment.status == "PAID") throw new PaymentException("Pagamento não pode ser deletado pois já foi realizado");
        return await this.paymentRepository.delete(id);
    }

    async getBalance(userId: number): Promise<any> {
        return userId;
    }

    private async updateStatus(): Promise<void> {
        const payments = await this.paymentRepository.getByStatus("PENDING");
        payments.forEach(payment => {
            if(payment.date >= new Date()) {
                payment.status = "PAID";
                this.paymentRepository.update(payment);
            }
        });
        setTimeout(() => { }, 2000); 
    }    
}