import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category, CategorySchema } from './schemas/categories.schema';
import { ProductsService } from '../products/products.service';
import { Product, ProductSchema } from '../products/schemas/products.schema';
import { ProductsModule } from '../products/products.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: async () => ({
        dest: __dirname+'/public/categories',
      }),
    }),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    forwardRef(() => ProductsModule),
  ],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CategoriesController,
    ProductsService,
  ],
  exports: [CategoriesService, CategoriesModule],
})
export class CategoriesModule {}
