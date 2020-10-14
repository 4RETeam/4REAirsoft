import { forwardRef, Module } from '@nestjs/common';
import { User, UserSchema } from '../users/schemas/user.schema';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category, CategorySchema } from './schemas/categories.schema';
import { ProductsService } from '../products/products.service';
import { Product, ProductSchema } from '../products/schemas/products.schema';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    // UsersModule,
    forwardRef(() => ProductsModule),
  ],
  controllers: [CategoriesController],
  providers: [
    // UsersService,
    CategoriesService,
    CategoriesController,
    ProductsService,
    // Object,
  ],
  exports: [CategoriesService, CategoriesModule],
})
export class CategoriesModule {}
