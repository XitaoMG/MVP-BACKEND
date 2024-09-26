import { Restaurant } from "src/restaurant/entities/restaurant.entity";


export abstract class DeleteRestaurantInterface {
    abstract execute(id: number): Promise<Restaurant>;
}