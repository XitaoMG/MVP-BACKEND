import { Injectable, Provider } from "@nestjs/common";
import { FindOneInterface } from "../interfaces/use-cases/find-one.interface";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import { User } from "../entities/user.entity";


@Injectable()
export class FindOne implements FindOneInterface {

    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) { }

    execute(id: number): Promise<User | null> {
        return this.userRepository.findOne(id);
    }
}

export const ProviderFindOne: Provider<FindOneInterface> = {
    provide: FindOneInterface,
    useClass: FindOne
}