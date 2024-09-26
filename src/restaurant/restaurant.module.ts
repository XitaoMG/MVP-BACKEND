import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RestaurantController } from './controllers/restaurant.controller';
import { ProviderCreateRestaurant } from './use-cases/create-restaurant.use-case';
import { ProviderDeleteRestaurant } from './use-cases/delete-restaurant.use-case';
import { ProviderFindAll } from './use-cases/find-all.use-case';
import { ProviderFindOne } from './use-cases/find-one.use-case';
import { ProviderFindByTerm } from './use-cases/find-by-term.use-case';
import { ProviderUpdateRestaurant } from './use-cases/update-restaurant.use-case';
import { ProviderRestaurantRepository } from './repositories/restaurant.repository';


@Module({
  controllers: [RestaurantController],
  providers: [
    ProviderCreateRestaurant,
    ProviderDeleteRestaurant,
    ProviderFindAll,
    ProviderFindOne,
    ProviderRestaurantRepository,
    ProviderFindByTerm,
    ProviderUpdateRestaurant
  ],
  imports: [PrismaModule],
})
export class RestaurantModule { }
