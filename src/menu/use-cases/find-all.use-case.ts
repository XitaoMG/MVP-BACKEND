import { Injectable, Provider } from "@nestjs/common";
import { FindAllInterface } from "../interfaces/use-cases/find-all.interface";
import { MenuRepositoryInterface } from "../interfaces/menu.repository.interface";
import { Menu } from "../entities/menu.entity";


@Injectable()
export class FindAll implements FindAllInterface {

    constructor(
        private readonly menuRepository: MenuRepositoryInterface
    ) { }

    execute(): Promise<Menu[]> {
        return this.menuRepository.findAll();
    }
}

export const ProviderFindAll: Provider<FindAllInterface> = {
    provide: FindAllInterface,
    useClass: FindAll
}