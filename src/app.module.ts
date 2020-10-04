import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment'

@Module({
  imports: [UsersModule, ProfilesModule, ProductsModule, CategoriesModule, MongooseModule.forRoot(environment.mongodb)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
