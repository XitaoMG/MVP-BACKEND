import { UpdateRestaurantDto } from "src/restaurant/dto/update-restaurant.dto";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";


export abstract class UpdateRestaurantInterface {
    abstract execute(id: number, dto: UpdateRestaurantDto): Promise<Restaurant>;
}