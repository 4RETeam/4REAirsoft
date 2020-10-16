import { Module } from '@nestjs/common';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { Product, ProductSchema } from './products/schemas/products.schema';
import {
  Category,
  CategorySchema,
} from './categories/schemas/categories.schema';
import { User, UserSchema } from './users/schemas/user.schema';
import { AuthModule } from './auth/auth.module';
import { PaypalModule } from './paypal/paypal.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    MongooseModule.forRoot('mongodb://localhost:27017/pleasework'),
    UsersModule,
    CategoriesModule,
    ProductsModule,
    AuthModule,
    PaypalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
