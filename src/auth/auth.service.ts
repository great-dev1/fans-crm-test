import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = { name: user.name, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}