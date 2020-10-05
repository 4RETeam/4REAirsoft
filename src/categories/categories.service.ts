import { Injectable } from '@nestjs/common';
import { Categorie } from './interfaces/categories.interface';


@Injectable()
export class CategoriesService {
    private readonly categories: Categorie[] = [];

    create(categories: Categorie) {
        this.categories.push(categories)
    }

    FindAll(): Categorie[] {
        return this.categories;
    }
}
