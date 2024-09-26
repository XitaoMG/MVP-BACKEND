import { Injectable, Provider } from "@nestjs/common";
import { CreateRestaurantInterface } from "../interfaces/use-cases/create-restaurant.interface";
import { CreateRestaurantDto } from "../dto/create-restaurant.dto";
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.repository.interface";
import { Restaurant } from "../entities/restaurant.entity";


@Injectable()
export class CreateRestaurant implements CreateRestaurantInterface {

    constructor(
        private readonly restaurantRepository: RestaurantRepositoryInterface
    ) { }

    async execute(
        createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        return this.restaurantRepository.create(createRestaurantDto);
    }
}

export const ProviderCreateRestaurant: Provider<CreateRestaurantInterface> = {
    provide: CreateRestaurantInterface,
    useClass: CreateRestaurant
}