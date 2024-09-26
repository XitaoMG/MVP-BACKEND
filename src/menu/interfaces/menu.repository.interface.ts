import { CreateMenuDto } from "../dto/create-menu.dto"
import { UpdateMenuDto } from "../dto/update-menu.dto"
import { Menu } from "../entities/menu.entity"


export abstract class MenuRepositoryInterface {

    abstract create(createMenuDto: CreateMenuDto): Promise<Menu>;
    abstract findOne(id: number): Promise<Menu | null>;
    abstract update(id: number, dto: UpdateMenuDto): Promise<Menu>;
    abstract findAll(): Promise<Menu[]>;
    abstract findByRestaurantId(restaurantId: number): Promise<Menu[]>;
    abstract delete(id: number): Promise<Menu>;
}