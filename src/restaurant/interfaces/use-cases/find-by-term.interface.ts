import { Restaurant } from "src/restaurant/entities/restaurant.entity";

export abstract class FindByTermInterface {
    abstract execute(term: string): Promise<Restaurant[]>;
}