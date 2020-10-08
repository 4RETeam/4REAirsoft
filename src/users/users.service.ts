import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UsersDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<UsersDocument>) { }

  async getUsers(): Promise<UsersDocument[]> {
    return this.userModel.find().exec();
  }

  async getUserById (id: string): Promise<UsersDocument> {
    return this.userModel.findById({_id:id}).exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User>{
    const createdUser = new this.userModel(createUserDto);
    return  createdUser.save();
  }

}
