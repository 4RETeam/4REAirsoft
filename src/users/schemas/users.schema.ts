import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'typeorm';

export type UsersDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: number;

  @Prop()
  Profile: string;
  
  profile: {type: ObjectID, ref: 'profiles'}
}

export const UsersSchema = SchemaFactory.createForClass(User);