import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CreateMenuDto } from '../dto/create-menu.dto';
import { UpdateMenuDto } from '../dto/update-menu.dto';
import { FindAllInterface } from '../interfaces/use-cases/find-all.interface';
import { FindOneInterface } from '../interfaces/use-cases/find-one.interface';
import { FindByRestaurantIdInterface } from '../interfaces/use-cases/find-by-restaurant-id.interface';
import { CreateMenuInterface } from '../interfaces/use-cases/create-menu.interface';
import { UpdateMenuInterface } from '../interfaces/use-cases/update-menu.interface';
import { DeleteMenuInterface } from '../interfaces/use-cases/delete-menu.interface';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('menu')
@UseGuards(AuthGuard)
export class MenuController {
  constructor(
    private readonly findAllMenus: FindAllInterface,
    private readonly findOneMenu: FindOneInterface,
    private readonly findByRestaurantId: FindByRestaurantIdInterface,
    private readonly createMenu: CreateMenuInterface,
    private readonly updateMenu: UpdateMenuInterface,
    private readonly deleteMenu: DeleteMenuInterface
  ) { }

  @Get()
  findAll() {
    return this.findAllMenus.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneMenu.execute(+id);
  }

  @Get('restaurant/:id')
  findRestaurantId(@Param('id') id: string) {
    return this.findByRestaurantId.execute(+id);
  }

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.createMenu.execute(createMenuDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.updateMenu.execute(+id, updateMenuDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteMenu.execute(+id);
  }
}
