export declare class OrderCreatedEvent {
    readonly orderId: string;
    readonly userId: string;
    readonly price: number;
    constructor(orderId: string, userId: string, price: number);
    toString(): string;
}
