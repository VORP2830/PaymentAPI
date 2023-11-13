import { Prisma } from "@prisma/client";
import { Status } from "./Status.Enum";

export class Payment implements Prisma.PaymentCreateInput {
    id: number;
    value: number;
    userPayerId?: number | null;
    userPayeeId: number;
    date: Date;
    status: Status;
    userPayer: Prisma.UserCreateNestedOneWithoutPaymentsMadeInput;
    userPayee: Prisma.UserCreateNestedOneWithoutPaymentsReceivedInput;
}
