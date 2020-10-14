import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto, ReturnUserDto } from './dto/users.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  public async findAll(): Promise<User[]> {
    const allUsers = await this.usersService.findAll();
    return allUsers;
  }

  @Post('login')
  public async login(@Body() data: CreateUserDto): Promise<Object> {
    return { access_token: await this.usersService.login(data) };
  }

  @Post()
  public async create(@Body() data: CreateUserDto): Promise<User | Object> {
    return this.usersService.create(data);
  }
}
