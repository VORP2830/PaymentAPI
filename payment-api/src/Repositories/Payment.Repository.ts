import { Payment, PrismaClient, Status } from '@prisma/client';

export class PaymentRepository {
    constructor() { }
    private readonly prisma = new PrismaClient();

    async getById(id: number): Promise<Payment> {
        return await this.prisma.payment.findUnique({ where: { id: Number(id) } });
    }

    async getByUserPayerId(userPayerId: number): Promise<Payment[]> {
        return await this.prisma.payment.findMany({ where: { userPayerId: Number(userPayerId) } });
    }

    async getByUserPayeeId(userPayeeId: number): Promise<Payment[]> {
        return await this.prisma.payment.findMany({ where: { userPayeeId: Number(userPayeeId) } });
    }

    async getByStatus(status: Status): Promise<Payment[]> {
        return await this.prisma.payment.findMany({ where: { status: status } });
    }    

    async create(data: Payment): Promise<Payment> {
        return await this.prisma.payment.create({
            data
        });
    }

    async update(data: Payment): Promise<Payment> {
        return await this.prisma.payment.update({
            where: { id: Number(data.id) },
            data: {
                id: data.id,
                value: data.value,
                date: data.date,
                status: data.status,
                userPayerId: data.userPayerId,
                userPayeeId: data.userPayeeId
            }
        });
    }

    async delete(id: number): Promise<Payment> {
        return await this.prisma.payment.delete({ where: { id: Number(id) } });
    }
}