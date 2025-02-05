import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() userData: Partial<User>): Promise<User> {
        return this.usersService.createUser(userData);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<User> {
        return this.usersService.findById(id);
    }
}
