import { Injectable, Provider } from "@nestjs/common";
import { DeleteUserInterface } from "../interfaces/use-cases/delete-user.interface";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import { User } from "../entities/user.entity";


@Injectable()
export class DeleteUser implements DeleteUserInterface {
    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) { }

    execute(id: number): Promise<User> {
        return this.userRepository.delete(id);
    }
}

export const ProviderDeleteUser: Provider<DeleteUserInterface> = {
    provide: DeleteUserInterface,
    useClass: DeleteUser
}