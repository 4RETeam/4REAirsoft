import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name!: string;

  @Prop()
  description!: string;

  @Prop()
  price!: string;

  @Prop()
  createdDate!: Date;

  @Prop()
  updatedDate!: Date;

  @Prop()
  category!: string;

  @Prop()
  isSpecial!: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
