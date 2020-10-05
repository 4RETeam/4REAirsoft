import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Categories } from '../interfaces/categories.interface';

export type CategoriesDocument = Categories & Document;


@Schema()
export class Category {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;


}

export const CategoriesDocument = SchemaFactory.createForClass(Category)