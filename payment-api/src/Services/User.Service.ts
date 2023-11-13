import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PaymentException } from "src/Exceptions/Excption";
import { UserRepository } from "src/Repositories/User.Repository";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async getAll(): Promise<User[]> {
        return await this.userRepository.getAll();
    }

    async getById(id: number): Promise<User> {
        return await this.userRepository.getById(id);
    }

    async create(data: User): Promise<User> {
        const user = await this.userRepository.getByUserName(data.userName);
        if(user != null) throw new PaymentException("Nome de usuário já em uso");
        return await this.userRepository.create(data);
    }

    async update(data: User): Promise<User> {
        const user = await this.userRepository.getByUserName(data.userName);
        if(user != null) throw new PaymentException("Nome de usuário já em uso");
        return await this.userRepository.update(data);
    }

    async delete(id: number): Promise<User> {
        throw new PaymentException(`Não é possível deletar um usuário ID:${id}`);
    }
}