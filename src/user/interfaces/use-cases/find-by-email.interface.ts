import { User } from "src/user/entities/user.entity";


export abstract class FindByEmailInterface {
    abstract execute(email: string): Promise<User>;
}