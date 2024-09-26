import { Injectable, Provider } from "@nestjs/common";
import { FindOneInterface } from "../interfaces/use-cases/find-one.interface";
import { MenuRepositoryInterface } from "../interfaces/menu.repository.interface";
import { Menu } from "../entities/menu.entity";


@Injectable()
export class FindOne implements FindOneInterface {

    constructor(
        private readonly menuRepository: MenuRepositoryInterface
    ) { }

    execute(id: number): Promise<Menu | null> {
        return this.menuRepository.findOne(id);
    }
}

export const ProviderFindOne: Provider<FindOneInterface> = {
    provide: FindOneInterface,
    useClass: FindOne
}