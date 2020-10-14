import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name!: string;

  @Prop()
  description!: string;

  @Prop()
  createdDate!: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
