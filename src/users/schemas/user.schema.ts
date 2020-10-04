import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Users } from '../interfaces/users.interface';
import { UsersController } from '../users.controller';

export type UserDocuments = Users & Document;

@Schema()
export class user {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

}

export const UserDocuments = SchemaFactory.createForClass(user);