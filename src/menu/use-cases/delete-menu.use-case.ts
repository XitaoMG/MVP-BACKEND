import { Injectable, Provider } from "@nestjs/common";
import { DeleteMenuInterface } from "../interfaces/use-cases/delete-menu.interface";
import { MenuRepositoryInterface } from "../interfaces/menu.repository.interface";
import { Menu } from "../entities/menu.entity";


@Injectable()
export class DeleteMenu implements DeleteMenuInterface {
    constructor(
        private readonly menuRepository: MenuRepositoryInterface
    ) { }

    execute(id: number): Promise<Menu> {
        return this.menuRepository.delete(id);
    }
}

export const ProviderDeleteMenu: Provider<DeleteMenuInterface> = {
    provide: DeleteMenuInterface,
    useClass: DeleteMenu
}