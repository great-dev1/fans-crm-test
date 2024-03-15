import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(userData: User): Promise<User> {
    const user = await this.userModel.create(userData);
    console.log(`User created: ${JSON.stringify(user)}`);
    return user;
  }

  async getUser(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (user) {
      console.log(`User found: ${JSON.stringify(user)}`);
      return user;
    }
    throw new Error('User not found');
  }
}