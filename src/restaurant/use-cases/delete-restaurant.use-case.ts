import { Injectable, Provider } from "@nestjs/common";
import { DeleteRestaurantInterface } from "../interfaces/use-cases/delete-restaurant.interface";
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.repository.interface";
import { Restaurant } from "../entities/restaurant.entity";


@Injectable()
export class DeleteRestaurant implements DeleteRestaurantInterface {
    constructor(
        private readonly restaurantRepository: RestaurantRepositoryInterface
    ) { }

    execute(id: number): Promise<Restaurant> {
        return this.restaurantRepository.delete(id);
    }
}

export const ProviderDeleteRestaurant: Provider<DeleteRestaurantInterface> = {
    provide: DeleteRestaurantInterface,
    useClass: DeleteRestaurant
}