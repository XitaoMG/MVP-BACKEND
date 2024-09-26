import { Menu } from "src/menu/entities/menu.entity";


export abstract class FindByRestaurantIdInterface {
    abstract execute(restaurantId: number): Promise<Menu[]>
}