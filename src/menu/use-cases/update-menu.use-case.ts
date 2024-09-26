import { Injectable, Provider } from "@nestjs/common";
import { UpdateMenuDto } from "../dto/update-menu.dto";
import { UpdateMenuInterface } from "../interfaces/use-cases/update-menu.interface";
import { MenuRepositoryInterface } from "../interfaces/menu.repository.interface";
import { Menu } from "../entities/menu.entity";


@Injectable()
export class UpdateMenu implements UpdateMenuInterface {
    constructor(
        private readonly menuRepository: MenuRepositoryInterface
    ) { }

    async execute(id: number, dto: UpdateMenuDto): Promise<Menu> {
        const menu = await this.menuRepository.findOne(id);

        if (!menu) throw new Error('Menu not found!');

        return this.menuRepository.update(id, dto);
    }
}

export const ProviderUpdateMenu: Provider<UpdateMenuInterface> = {
    provide: UpdateMenuInterface,
    useClass: UpdateMenu
}