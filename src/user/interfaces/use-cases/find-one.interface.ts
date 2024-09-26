import { User } from "src/user/entities/user.entity";


export abstract class FindOneInterface {
    abstract execute(id: number): Promise<User | null>;
}