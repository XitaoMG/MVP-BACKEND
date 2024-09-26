import { CreateMenuDto } from "src/menu/dto/create-menu.dto";
import { Menu } from "src/menu/entities/menu.entity";

export abstract class CreateMenuInterface {
    abstract execute(createMenuDto: CreateMenuDto): Promise<Menu>;
}