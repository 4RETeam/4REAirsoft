import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { hasRoles } from '../auth/decorator/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole, UserRoleEnum } from '../users/dto/users.dto';
import { CreateProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/products.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @hasRoles(UserRole[UserRoleEnum.EDITOR])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  public async createProdWithCategory(
    @Body() data: CreateProductDto,
  ): Promise<Product | null> {
    return this.productsService.createProduct(data);
  }
}
