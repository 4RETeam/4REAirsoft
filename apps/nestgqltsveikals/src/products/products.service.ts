import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/products.dto';
import { Product, ProductDocument } from './schemas/products.schema';
import { CategoriesService } from '../categories/categories.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @Inject(forwardRef(() => CategoriesService))
    private readonly categoryService: CategoriesService,
  ) {}

  public async findProductsForParent(id: string): Promise<Product[] | null> {
    return this.productModel.find({ category: id });
  }

  public async findSpecialOffers(): Promise<Product[] | null> {
    return this.productModel.find({ isSpecial: true });
  }

  public async findNewProducts(): Promise<Product[] | null> {
    const nowDate = new Date();
    nowDate.setMonth(nowDate.getMonth() -1);
    return this.productModel.find({createdDate:{$gte:nowDate}})
  }

  public async findNonSpecialOffers(): Promise<Product[] | null> {
    return this.productModel.find({ isSpecial: false });
  }

  public async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<Product | null> {
    createProductDto.createdDate = new Date();
    
    const categoryId = await this.categoryService.findCategoryIdByName(
      createProductDto.categoryName,
    );

    if (!categoryId) return null;
    createProductDto.category = (await categoryId).toString();
    return new this.productModel(createProductDto).save();
  }
}
