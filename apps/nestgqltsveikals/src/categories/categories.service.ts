import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/schemas/products.schema';
// import { User } from '../users/schemas/user.schema';
// import { UsersService } from '../users/users.service';
import { CreateCategoryDto } from './dto/categories.dto';
import { Category, CategoryDocument } from './schemas/categories.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    private readonly productsService: ProductsService, // private readonly usersService: UsersService,
  ) {}

  public async findCategoryIdByName(name: string): Promise<string | null> {
    return (await this.categoryModel.findOne({ name })).id;
  }

  public async findAllChildProducts(name: string): Promise<Product[] | null> {
    const id = (await this.findCategoryIdByName(name)).toString();
    return this.productsService.findProductsForParent(id);
  }

  public async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }
}
