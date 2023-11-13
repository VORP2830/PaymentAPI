import { User, PrismaClient } from '@prisma/client';

export class UserRepository {
    constructor() { }
    private readonly prisma = new PrismaClient();
    
    async getAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async getById(id: number): Promise<User> {
        return await this.prisma.user.findUnique({ where: { id: Number(id) } });
    }

    async getByUserName(userName: string): Promise<User> {
        return await this.prisma.user.findUnique({ where: { userName: String(userName) } });
    }

    async create(data: User): Promise<User> {
        return await this.prisma.user.create({
            data
        });
    }

    async update(data: User): Promise<User> {
        return await this.prisma.user.update({
            where: { id: Number(data.id) },
            data: {
                id: data.id,
                name: data.name,
                userName: data.userName,
                password: data.password,
            }
        });
    }

    async delete(id: number): Promise<User> {
        return await this.prisma.user.delete({ where: { id: Number(id) } });
    }
}