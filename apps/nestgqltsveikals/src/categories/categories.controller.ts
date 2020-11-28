import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { join, parse } from 'path';
import { Product } from '../products/schemas/products.schema';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, FindChildrenDto } from './dto/categories.dto';
import { Category } from './schemas/categories.schema';
import {diskStorage} from 'multer';
import {v4 as uuidv4} from 'uuid'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { preservePath:true,
    storage: diskStorage({
      destination:'./public/categories',
      filename:(req,file,cb) =>{
        const filename: string = parse(file.originalname).name.replace(/\s/g,'')+uuidv4();
        const extension = parse(file.originalname).ext;
        cb(null,`${filename}${extension}`)
      }

    })
  }))
  async createCategory(@Body() data: CreateCategoryDto, @UploadedFile() file): Promise<Category> {
    // console.log(file);
    data.createdDate = new Date();
    data.imagePath = file.filename;
    return this.categoriesService.createCategory(data);
  }

  @Get(':imgpath')
seeUploadedFile(@Param('imgpath') image:string, @Res() res){
  // console.log(join(__dirname, 'public/categories/' + image.split('/')[image.split('/').length-1]))
  return res.sendFile(join(__dirname, 'public/categories/' + image.split('/')[image.split('/').length-1]));
}


  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post('children')
  async getAllProducts(
    @Body() data: FindChildrenDto,
  ): Promise<Product[] | null> {
    return this.categoriesService.findAllChildProducts(data.name);
  }
}
