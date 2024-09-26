import { Menu } from "src/menu/entities/menu.entity";


export abstract class FindOneInterface {
    abstract execute(id: number): Promise<Menu | null>;
}