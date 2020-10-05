import { Injectable } from '@nestjs/common';
import { Categories } from './interfaces/categories.interface';

@Injectable()
export class CategoriesService {
    private readonly categories: Categories[] = [];

    create(categories: Categories) {
        this.categories.push(categories)
    }

    FindAll(): Categories[] {
        return this.categories;
    }
}
