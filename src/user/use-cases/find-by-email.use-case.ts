import { Injectable, Provider } from "@nestjs/common";
import { FindByEmailInterface } from "../interfaces/use-cases/find-by-email.interface";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import { User } from "../entities/user.entity";


@Injectable()
export class FindByEmail implements FindByEmailInterface {

    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) { }

    async execute(email: string): Promise<User> {
        const userEmail = await this.userRepository.findByEmail(email)
        if (!email) throw new Error("Email not found!");

        return userEmail;
    }
}

export const ProviderFindByEmail: Provider<FindByEmailInterface> = {
    provide: FindByEmailInterface,
    useClass: FindByEmail
}