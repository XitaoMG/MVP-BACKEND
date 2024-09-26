import { Injectable, Provider } from "@nestjs/common";
import { FindByRestaurantIdInterface } from "../interfaces/use-cases/find-by-restaurant-id.interface";
import { MenuRepositoryInterface } from "../interfaces/menu.repository.interface";
import { Menu } from "../entities/menu.entity";


@Injectable()
export class FindByRestaurantId implements FindByRestaurantIdInterface {
    constructor(
        private readonly menuRepository: MenuRepositoryInterface
    ) { }

    async execute(restaurantId: number): Promise<Menu[]> {
        return this.menuRepository.findByRestaurantId(restaurantId)
    }
}

export const ProviderFindByRestaurantId: Provider<FindByRestaurantIdInterface> = {
    provide: FindByRestaurantIdInterface,
    useClass: FindByRestaurantId
}