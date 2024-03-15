import { Body, Controller, Get, Param, Post, UseGuards  } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  @UseGuards(AuthGuard('jwt'))
  async addUser(@Body() userData: User): Promise<User> {
    return this.usersService.createUser(userData);
  }

  @Get('get-user/:id')
  @UseGuards(AuthGuard('jwt'))
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.getUser(id);
  }
}