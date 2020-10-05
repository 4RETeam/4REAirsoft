import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Post()
    create(name?: string): string {
        return `This action adds a new products with name ${name}`
    }

    @Get()
    findAll(): string {
        return  'This action returns all products'
    }

    @Delete()
    remove(id?: string, name?: string): string {
        return `This action removes product ${name} with id ${id}`
    }
}
