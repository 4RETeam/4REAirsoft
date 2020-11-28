import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { parse } from 'path';
import { hasRoles } from '../auth/decorator/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole, UserRoleEnum } from '../users/dto/users.dto';
import { CreateProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/products.schema';
import {v4 as uuidv4} from 'uuid'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @hasRoles(UserRole[UserRoleEnum.USER])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', { preservePath:true,
    storage: diskStorage({
      destination:'./public/products',
      filename:(req,file,cb) =>{
        // console.log(file);
        const filename: string = parse(file.originalname).name.replace(/\s/g,'')+uuidv4();
        const extension = parse(file.originalname).ext;
        cb(null,`${filename}${extension}`)
      }

    })
  }))
  public async createProdWithCategory(
    @Body() data: CreateProductDto,
    @UploadedFile() file
  ): Promise<Product | null> {
    // console.log(data)  
    // console.log(file + 'asdfasfas');
    
    // console.log(data);
    data.imagePath = file.filename;
    console.log(data);
    return this.productsService.createProduct(data);
  }
}
