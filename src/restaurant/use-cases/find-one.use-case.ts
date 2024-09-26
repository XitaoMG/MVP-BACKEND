import { Injectable, Provider } from "@nestjs/common";
import { FindOneInterface } from "../interfaces/use-cases/find-one.interface";
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.repository.interface";
import { Restaurant } from "../entities/restaurant.entity";


@Injectable()
export class FindOne implements FindOneInterface {

    constructor(
        private readonly restaurantRepository: RestaurantRepositoryInterface
    ) { }

    execute(id: number): Promise<Restaurant | null> {
        return this.restaurantRepository.findOne(id);
    }
}

export const ProviderFindOne: Provider<FindOneInterface> = {
    provide: FindOneInterface,
    useClass: FindOne
}