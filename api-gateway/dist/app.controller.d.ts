import { AppService } from './app.service';
import { createOrderRequet } from './creater-order-request.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createOrder(createOrderRequest: createOrderRequet): void;
}
