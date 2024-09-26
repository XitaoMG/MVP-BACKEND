import { UpdateUserDto } from "src/user/dto/update-user.dto";
import { User } from "src/user/entities/user.entity";


export abstract class UpdateUserInterface {
    abstract execute(id: number, dto: UpdateUserDto): Promise<User>;
}