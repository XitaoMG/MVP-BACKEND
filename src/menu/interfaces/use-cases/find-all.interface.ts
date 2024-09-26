import { Menu } from "src/menu/entities/menu.entity";


export abstract class FindAllInterface {
    abstract execute(): Promise<Menu[]>;
}