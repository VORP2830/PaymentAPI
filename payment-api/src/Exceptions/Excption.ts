export class PaymentException extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = this.message;
    }
}