export class CreateUserDto {
         password!: string;
         email!: string;
         role?: number;
         // roles: RoleEnum[] = [];
         isEnabled?: boolean = true;
       }
export class LoginUserDto {
         password!: string;
         role?: number;
         email!: string;
       }
export class ValidateUserDto {
         password!: string;
         role?: number;
         email!: string;
       }
export class ReturnUserDto {
         role?: number;
         email!: string;
       }

export const UserRole = ['ADMIN', 'EDITOR', 'CHIEFEDITOR', 'USER'];
export enum UserRoleEnum {'ADMIN', 'EDITOR', 'CHIEFEDITOR', 'USER'};