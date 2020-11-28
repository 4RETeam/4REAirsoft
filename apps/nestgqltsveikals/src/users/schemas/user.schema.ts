import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole } from '../dto/users.dto';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email!: string;

  @Prop({
    type: String,
    enum: ['ADMIN', 'EDITOR', 'CHIEFEDITOR', 'USER'],
    default: 'USER',
  })
  role: string;

  @Prop()
  password!: string;

  @Prop()
  isEnabled!: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
