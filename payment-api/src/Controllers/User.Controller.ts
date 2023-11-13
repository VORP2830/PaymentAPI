import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "@prisma/client";
import { PaymentException } from "src/Exceptions/Excption";
import { UserService } from "src/Services/User.Service";

@Controller('api/user')
export class UserController{
    constructor(private readonly userService: UserService) { }

    @Get()
    async get(): Promise<{ message: string } | User[]>{
        try {
            return await this.userService.getAll();
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
        return { message: "Erro ao executar a ação" };
        }
    }
    @Get(":id")
    async getById(id: number): Promise<{ message: string } | User>{
        try {
            return await this.userService.getById(id);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
        return { message: "Erro ao executar a ação" };
        }
    }
    @Post()
    async create(@Body() data: User): Promise<{ message: string } | User>{
        try {
            return await this.userService.create(data);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
        return { message: "Erro ao executar a ação" };
        }
    }
    @Put()
    async updatePayment(@Body() data: User): Promise<{ message: string } | User>{
        try {
            return await this.userService.update(data);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
        return { message: "Erro ao executar a ação" };
        }
    }
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<{ message: string } | User> {
        try {
            return await this.userService.delete(id);
        } catch (error) {
            if (error instanceof PaymentException) {
                return { message: error.message };
            }
        return { message: "Erro ao executar a ação" };
        }
    }
}