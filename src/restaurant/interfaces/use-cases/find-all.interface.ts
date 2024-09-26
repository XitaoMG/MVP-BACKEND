import { Restaurant } from "src/restaurant/entities/restaurant.entity";


export abstract class FindAllInterface {
    abstract execute(): Promise<Restaurant[]>;
}