import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto, LoginUserDto, ValidateUserDto } from './dto/users.dto';
import { AuthService } from '../auth/auth.service';
import { generate } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | Object> {
    createUserDto.password = (
      await this.authService.hashPassword(createUserDto.password).toPromise()
    ).toString();
    let email = await this.validateEmail(createUserDto.email);
    if (email) {
      createUserDto.email = email.toString();
      const createdUser = new this.userModel(createUserDto);
      if (
        !(await this.userModel
          .findOne(
            { email: createUserDto.email },
            { password: 0, _id: 0, __v: 0 },
          )
          .exec())
      ) {
        createdUser.save();
        return this.userModel
          .findOne(
            { email: createUserDto.email },
            { password: 0, _id: 0, __v: 0 },
          )
          .exec();
      } else {
        return { error: 'Email already exists' };
      }
    } else {
      return { error: 'email not valid' };
    }
  }

  async validateEmail(email: string): Promise<string | boolean> {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email) ? email.toLowerCase() : false;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}, { password: 0, _id: 0, __v: 0 }).exec();
  }

  async login(loginUserDto: LoginUserDto): Promise<string> {
    const user = this.validateUser(loginUserDto);
    if (user) {
      const resolvedToken = await this.authService
        .generateJWT(await this.findByMail(loginUserDto.email))
        .toPromise();
      return resolvedToken;
    } else {
      return 'nope';
    }
  }

  async validateUser(validateUserDto: ValidateUserDto): Promise<User> {
    return this.authService
      .comparePassword(
        validateUserDto.password,
        (await this.findByMail(validateUserDto.email)).password,
      )
      .toPromise();
  }

  async findByMail(email: string): Promise<User> {
    const user = this.userModel.findOne({ email });
    return user;
  }
}
