import { CreateRestaurantDto } from "src/restaurant/dto/create-restaurant.dto";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";

export abstract class CreateRestaurantInterface {
    abstract execute(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
}