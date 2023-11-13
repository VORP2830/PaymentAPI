import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserService } from "src/Services/User.Service";

@Controller('api/user')
export class UserController{
    constructor(private readonly userService: UserService) { }

    @Get()
    async get(): Promise<User[]>{
        return await this.userService.getAll();
    }
    @Get(":id")
    async getById(id: number): Promise<User>{
        return await this.userService.getById(id);
    }
    @Post()
    async create(@Body() data: User): Promise<User>{
        return await this.userService.create(data);
    }
    @Put()
    async updatePayment(@Body() data: User): Promise<User>{
        return await this.userService.update(data);
    }
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<User> {
        return await this.userService.delete(id);
    }
}