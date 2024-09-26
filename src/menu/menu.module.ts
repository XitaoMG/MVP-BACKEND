import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MenuController } from './controllers/menu.controller';
import { ProviderCreateMenu } from './use-cases/create-menu.use-case';
import { ProviderDeleteMenu } from './use-cases/delete-menu.use-case';
import { ProviderFindAll } from './use-cases/find-all.use-case';
import { ProviderFindOne } from './use-cases/find-one.use-case';
import { ProviderFindByRestaurantId } from './use-cases/find-by-restaurant-id.use-case';
import { ProviderUpdateMenu } from './use-cases/update-menu.use-case';
import { ProviderMenuRepository } from './repositories/menu.repository';


@Module({
  controllers: [MenuController],
  providers: [
    ProviderCreateMenu,
    ProviderDeleteMenu,
    ProviderFindAll,
    ProviderFindOne,
    ProviderMenuRepository,
    ProviderFindByRestaurantId,
    ProviderUpdateMenu
  ],
  imports: [PrismaModule],
})
export class MenuModule { }
