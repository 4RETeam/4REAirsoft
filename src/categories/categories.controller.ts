import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categorie } from './interfaces/categories.interface';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
    @Post(":name")
    create(@Param("name") name?: string): string {
        this.categoriesService.create({name,breed:"123",quantity:1})
        return `This action adds a new categories with name ${name}`
    }

    @Get()
    async findAll(): Promise<Categorie[]> {
        return this.categoriesService.FindAll();
    }

    // @Delete(':name')
    // remove(@Param('name') name?: string): string {
    //     this.categoriesService.remove(name)
    //     return `This action removes categorie ${name}`
    // }
}
   
