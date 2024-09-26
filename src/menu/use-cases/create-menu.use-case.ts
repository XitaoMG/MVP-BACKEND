import { Injectable, Provider } from "@nestjs/common";
import { CreateMenuInterface } from "../interfaces/use-cases/create-menu.interface";
import { CreateMenuDto } from "../dto/create-menu.dto";
import { MenuRepositoryInterface } from "../interfaces/menu.repository.interface";
import { Menu } from "../entities/menu.entity";


@Injectable()
export class CreateMenu implements CreateMenuInterface {

    constructor(
        private readonly menuRepository: MenuRepositoryInterface
    ) { }

    async execute(
        createMenuDto: CreateMenuDto): Promise<Menu> {
        return this.menuRepository.create(createMenuDto);
    }
}

export const ProviderCreateMenu:
    Provider<CreateMenuInterface> = {
    provide: CreateMenuInterface,
    useClass: CreateMenu
}