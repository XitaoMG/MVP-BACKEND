import { Injectable, Provider } from "@nestjs/common";
import { UpdateUserInterface } from "../interfaces/use-cases/update-user.interface";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../entities/user.entity";


@Injectable()
export class UpdateUser implements UpdateUserInterface {

    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) { }

    async execute(id: number, dto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOne(id);
        if (!user) throw new Error('User not found!');
        return this.userRepository.update(id, dto);
    }
}

export const ProviderUpdateUser: Provider<UpdateUserInterface> = {
    provide: UpdateUserInterface,
    useClass: UpdateUser
}