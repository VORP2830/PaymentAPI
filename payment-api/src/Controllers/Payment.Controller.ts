import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Payment, Status } from "@prisma/client";
import { PaymentException } from "src/Exceptions/Excption";
import { PaymentService } from "src/Services/Payment.Service";

@Controller('api/payment')
export class PaymentController{
    constructor(private readonly paymentService: PaymentService) { }

    @Get("status/:status")
    async getByStatus(@Param('status') status: Status): Promise<{ message: string } | Payment[]>{
        try {
            return await this.paymentService.getByStatus(status);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
        return { message: "Erro ao executar a ação" };
        }
    }
    @Get(":id")
    async getById(@Param('id') id: number): Promise<{ message: string } | Payment>{
        try {
            return await this.paymentService.getById(id);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
        return { message: "Erro ao executar a ação" };
        }
    }
    @Get("balance/:userId")
    async getBalanceByUserId(@Param('userId') userId: number): Promise<{ message: string } | number>{
        try {
            return await this.paymentService.getBalance(userId);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
            return { message: "Erro ao executar a ação" };
        }
    }
    @Post()
    async create(@Body() data: Payment): Promise<{ message: string } | Payment> {
        try {
            return await this.paymentService.create(data);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
            return { message: "Erro ao executar a ação" };
        }
    }

    @Put()
    async updatePayment(@Body() data: Payment): Promise<{ message: string } | Payment>{
        try {
            return await this.paymentService.update(data);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
            return { message: "Erro ao executar a ação" };
        }
    }
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<{ message: string } | Payment> {
        try {
            return await this.paymentService.delete(id);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
            return { message: "Erro ao executar a ação" };
        }
    }
}