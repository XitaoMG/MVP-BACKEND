import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { FindAllInterface } from '../interfaces/use-cases/find-all.interface';
import { FindOneInterface } from '../interfaces/use-cases/find-one.interface';
import { FindByTermInterface } from '../interfaces/use-cases/find-by-term.interface';
import { CreateRestaurantInterface } from '../interfaces/use-cases/create-restaurant.interface';
import { UpdateRestaurantInterface } from '../interfaces/use-cases/update-restaurant.interface';
import { DeleteRestaurantInterface } from '../interfaces/use-cases/delete-restaurant.interface';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('restaurant')
@UseGuards(AuthGuard)
export class RestaurantController {
  constructor(
    private readonly findAllRestaurants: FindAllInterface,
    private readonly findOneRestaurant: FindOneInterface,
    private readonly findByTermRestaurant: FindByTermInterface,
    private readonly createRestaurant: CreateRestaurantInterface,
    private readonly updateRestaurant: UpdateRestaurantInterface,
    private readonly deleteRestaurant: DeleteRestaurantInterface
  ) { }

  @Get()
  findAll() {
    return this.findAllRestaurants.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneRestaurant.execute(+id);
  }

  @Get('search/:term')
  findByTerm(@Param('term') term: string) {
    return this.findByTermRestaurant.execute(term);
  }

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.createRestaurant.execute(createRestaurantDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.updateRestaurant.execute(+id, updateRestaurantDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteRestaurant.execute(+id);
  }
}
