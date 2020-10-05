import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Post()
    create(name?: string): string {
        return `This action adds a new categories with name ${name}`
    }

    @Get()
    findAll(): string {
        return  'This action returns all categories'
    }

    @Delete()
    remove(id?: string, name?: string): string {
        return `This action removes category ${name} with id ${id}`
    }
}
   
