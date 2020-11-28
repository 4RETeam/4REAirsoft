import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of, scheduled } from 'rxjs';
import { User } from '../users/schemas/user.schema';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateJWT(user: User): Observable<string> {
    return from(this.jwtService.signAsync({ user }));
  }

  hashPassword(password: string): Observable<string> {
    return from<string>(bcrypt.hash(password, 12));
  }

  comparePassword(newPassword: string, passwordHash: string): Observable<any> {
    return of<any | boolean>(bcrypt.compare(newPassword, passwordHash));
  }
}
