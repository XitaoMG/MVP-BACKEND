import { Injectable, Provider } from "@nestjs/common";
import { FindAllInterface } from "../interfaces/use-cases/find-all.interface";
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.repository.interface";
import { Restaurant } from "../entities/restaurant.entity";


@Injectable()
export class FindAll implements FindAllInterface {

    constructor(
        private readonly restaurantsRepository: RestaurantRepositoryInterface
    ) { }

    execute(): Promise<Restaurant[]> {
        return this.restaurantsRepository.findAll();
    }
}

export const ProviderFindAll: Provider<FindAllInterface> = {
    provide: FindAllInterface,
    useClass: FindAll
}
