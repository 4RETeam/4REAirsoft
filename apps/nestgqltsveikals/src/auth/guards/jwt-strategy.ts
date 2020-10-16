import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        'lkjasdfbasjdflaslbjfuip32uig42uoi4ui23hkbdlkj!#$IUYT$UIQUI#Y',
    });
  }

  async validate(payload: any) {
    return { ...payload.user };
  }
}
