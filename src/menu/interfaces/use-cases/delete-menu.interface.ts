import { Menu } from "src/menu/entities/menu.entity";


export abstract class DeleteMenuInterface {
    abstract execute(id: number): Promise<Menu>;
}