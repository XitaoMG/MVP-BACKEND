import { UpdateMenuDto } from "src/menu/dto/update-menu.dto";
import { Menu } from "src/menu/entities/menu.entity";


export abstract class UpdateMenuInterface {
    abstract execute(id: number, dto: UpdateMenuDto): Promise<Menu>;
}