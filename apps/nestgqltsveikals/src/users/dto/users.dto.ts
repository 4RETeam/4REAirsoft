export class CreateUserDto {
  password!: string;
  email!: string;
  // roles: RoleEnum[] = [];
  isEnabled?: boolean = true;
}
export class LoginUserDto {
  password!: string;
  email!: string;
}
export class ValidateUserDto {
  password!: string;
  email!: string;
}
export class ReturnUserDto {
  email!: string;
}
