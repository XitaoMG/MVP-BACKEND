import { Controller, Get, Post, Body, Param, Patch, Delete, Query, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserInterface } from '../interfaces/use-cases/create-user.interface';
import { DeleteUserInterface } from '../interfaces/use-cases/delete-user.interface';
import { FindAllInterface } from '../interfaces/use-cases/find-all.interface';
import { FindOneInterface } from '../interfaces/use-cases/find-one.interface';
import { UpdateUserInterface } from '../interfaces/use-cases/update-user.interface';
import { FindByEmailInterface } from '../interfaces/use-cases/find-by-email.interface';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly findAllUsers: FindAllInterface,
    private readonly findOneUser: FindOneInterface,
    private readonly createUser: CreateUserInterface,
    private readonly updateUser: UpdateUserInterface,
    private readonly deleteUser: DeleteUserInterface,
    private readonly findByEmail: FindByEmailInterface
  ) { }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.findAllUsers.execute();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.findOneUser.execute(+id);
  }

  @Get('email/:email')
  // @UseGuards(AuthGuard)
  findUserByEmail(@Param('email') email: string) {
    return this.findByEmail.execute(email);
  }

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUser.execute(createUserDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUser.execute(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async delete(@Param('id') id: string) {
    return this.deleteUser.execute(+id);
  }
}
