import { Injectable, Provider } from "@nestjs/common"
import { UpdateRestaurantDto } from "../dto/update-restaurant.dto";
import { UpdateRestaurantInterface } from "../interfaces/use-cases/update-restaurant.interface";
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.repository.interface";
import { Restaurant } from "../entities/restaurant.entity";


@Injectable()
export class UpdateRestaurant implements UpdateRestaurantInterface {

    constructor(
        private readonly restaurantRepository: RestaurantRepositoryInterface
    ) { }

    async execute(id: number, dto: UpdateRestaurantDto): Promise<Restaurant> {
        const restaurant = await this.restaurantRepository.findOne(id);

        if (!restaurant) throw new Error('Restaurant not found!');

        return this.restaurantRepository.update(id, dto);
    }
}

export const ProviderUpdateRestaurant: Provider<UpdateRestaurantInterface> = {
    provide: UpdateRestaurantInterface,
    useClass: UpdateRestaurant
}