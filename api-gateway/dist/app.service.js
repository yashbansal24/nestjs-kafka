"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@nestjs/microservices/client");
const order_created_event_1 = require("./order-created.event");
let AppService = class AppService {
    constructor(billingClient) {
        this.billingClient = billingClient;
    }
    getHello() {
        return 'Hello World!';
    }
    createOrder({ userId, price }) {
        this.billingClient.emit('order_created', new order_created_event_1.OrderCreatedEvent('123', userId, price));
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BILLING_SERVICE')),
    __metadata("design:paramtypes", [client_1.ClientKafka])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map