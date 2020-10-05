import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Products } from '../interfaces/products.interface';

export type ProductsDocuments = Products & Document;


@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    breed: string;

    @Prop()
    id: string;
    
}

export const ProductsDocuments = SchemaFactory.createForClass(Product)