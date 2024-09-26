import { Injectable, Provider } from "@nestjs/common";
import { CreateUserInterface } from "../interfaces/use-cases/create-user.interface";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";


@Injectable()
export class CreateUser implements CreateUserInterface {

    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) { }

    async execute(
        createUserDto: CreateUserDto): Promise<User> {

        return this.userRepository.create(createUserDto);
    }
}

export const ProviderCreateUser: Provider<CreateUserInterface> = {
    provide: CreateUserInterface,
    useClass: CreateUser
}