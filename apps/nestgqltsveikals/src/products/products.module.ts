import { forwardRef, Module } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from '../auth/auth.module';
import { CategoriesModule } from '../categories/categories.module';
import { CategoriesService } from '../categories/categories.service';
import {
  Category,
  CategorySchema,
} from '../categories/schemas/categories.schema';
import { User, UserSchema } from '../users/schemas/user.schema';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
// import { User, UserSchema } from '../users/schemas/user.schema';
// import { UsersModule } from '../users/users.module';
// import { UsersService } from '../users/users.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/products.schema';

@Module({
  imports: [
    // CategoriesModule,
    MulterModule.registerAsync({
      useFactory: async () => ({
        dest: __dirname+'/public/products',
      }),
    }),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // UsersModule,
    AuthModule,
    forwardRef(() => CategoriesModule),
    UsersModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService, UsersService, CategoriesService],
})
export class ProductsModule {}
