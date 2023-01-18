import { ClientKafka } from '@nestjs/microservices/client';
import { createOrderRequet } from './creater-order-request.dto';
export declare class AppService {
    private readonly billingClient;
    constructor(billingClient: ClientKafka);
    getHello(): string;
    createOrder({ userId, price }: createOrderRequet): void;
}
