import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from '../products/schemas/products.schema';
import { User } from '../users/schemas/user.schema';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, FindChildrenDto } from './dto/categories.dto';
import { Category } from './schemas/categories.schema';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  //   @Get()
  //   test(): Promise<User[]> {
  //     return this.categoriesService.test();
  //   }

  @Post()
  async createCategory(@Body() data: CreateCategoryDto): Promise<Category> {
    data.createdDate = new Date();
    return this.categoriesService.createCategory(data);
  }

  @Post('children')
  async getAllProducts(
    @Body() data: FindChildrenDto,
  ): Promise<Product[] | null> {
    return this.categoriesService.findAllChildProducts(data.name);
  }
}
