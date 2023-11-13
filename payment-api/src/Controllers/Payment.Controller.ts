import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Payment, Status } from "@prisma/client";
import { PaymentService } from "src/Services/Payment.Service";

@Controller('api/payment')
export class PaymentController{
    constructor(private readonly paymentService: PaymentService) { }

    @Get()
    async getByStatus(@Param('status') status: Status): Promise<Payment[]>{
        return await this.paymentService.getByStatus(status);
    }
    @Get(":id")
    async getById(@Param('id') id: number): Promise<Payment>{
        return await this.paymentService.getById(id);
    }
    @Get(":userId")
    async getBalanceByUserId(@Param('userId') userId: number): Promise<Payment>{
        return await this.paymentService.getBalance(userId);
    }
    @Post()
    async create(@Body() data: Payment): Promise<Payment>{
        return await this.paymentService.create(data);
    }
    @Put()
    async updatePayment(@Body() data: Payment): Promise<Payment>{
        return await this.paymentService.update(data);
    }
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<Payment> {
        return await this.paymentService.delete(id);
    }
}