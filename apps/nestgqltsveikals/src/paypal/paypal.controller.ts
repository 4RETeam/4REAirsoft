import { Controller, Get } from '@nestjs/common';
import { Product } from '../products/schemas/products.schema';
import { PaypalService } from './paypal.service';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}
  @Get()
  pay(products: Product[]) {
    return this.paypalService.pay(products);
  }
}
