import { User } from "src/user/entities/user.entity";


export abstract class DeleteUserInterface {
    abstract execute(id: number): Promise<User>;
}