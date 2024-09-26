import { User } from "src/user/entities/user.entity";


export abstract class FindAllInterface {
    abstract execute(): Promise<User[]>;
}