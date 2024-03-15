import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: { name: string; email: string }) {
    const { name, email } = loginData;
    const user = { name, email };
    return this.authService.login(user);
  }
}