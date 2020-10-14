import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/products.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  public async createProdWithCategory(
    @Body() data: CreateProductDto,
  ): Promise<Product | null> {
    return this.productsService.createProduct(data);
  }
}
