import { Restaurant } from "src/restaurant/entities/restaurant.entity";


export abstract class FindOneInterface {
    abstract execute(id: number): Promise<Restaurant | null>;
}