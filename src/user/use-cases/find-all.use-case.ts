import { Injectable, Provider } from "@nestjs/common";
import { FindAllInterface } from "../interfaces/use-cases/find-all.interface";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import { User } from "../entities/user.entity";


@Injectable()
export class FindAll implements FindAllInterface {

    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) { }

    execute(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}

export const ProviderFindAll: Provider<FindAllInterface> = {
    provide: FindAllInterface,
    useClass: FindAll
}