import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/entities/user.entity";

export abstract class CreateUserInterface {
    abstract execute(createUserDto: CreateUserDto): Promise<User>;
}