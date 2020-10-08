import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersDocument } from './schemas/users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Get()
    getHello(): Promise<UsersDocument[]> {
      return this.usersService.getUsers();
    }

    @Post()
    async createUser(@Body() creteUserDto: CreateUserDto){
      return this.usersService.createUser(creteUserDto);
    }
}
