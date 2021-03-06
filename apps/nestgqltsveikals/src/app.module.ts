import { Module } from '@nestjs/common';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { PaypalModule } from './paypal/paypal.module';
import { ProductsService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';
import { Product, ProductSchema } from './products/schemas/products.schema';
import {
  Category,
  CategorySchema,
} from './categories/schemas/categories.schema';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    MongooseModule.forRoot('mongodb://localhost:27017/pleasework'),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    UsersModule,
    CategoriesModule,
    ProductsModule,
    AuthModule,
    PaypalModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProductsService, CategoriesService],
})
export class AppModule {}
