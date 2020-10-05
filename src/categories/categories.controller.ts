import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Post()
    create(): string {
        return 'This action adds a new categories'
    }

    @Get()
    findAll(): string {
        return  'This action returns all categories'
    }

    @Delete()
    remove(): string {
        return 'This action removes categories'
    }
}
   
