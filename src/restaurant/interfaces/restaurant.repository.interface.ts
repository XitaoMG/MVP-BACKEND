import { CreateRestaurantDto } from "../dto/create-restaurant.dto";
import { UpdateRestaurantDto } from "../dto/update-restaurant.dto";
import { Restaurant } from "../entities/restaurant.entity";


export abstract class RestaurantRepositoryInterface {

    abstract create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    abstract findOne(id: number): Promise<Restaurant | null>;
    abstract update(id: number, dto: UpdateRestaurantDto): Promise<Restaurant>;
    abstract findAll(): Promise<Restaurant[]>;
    abstract findByTerm(term: string): Promise<Restaurant[]>
    abstract delete(id: number): Promise<Restaurant>;
}