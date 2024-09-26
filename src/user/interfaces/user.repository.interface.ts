import { CreateUserDto } from "../dto/create-user.dto"
import { UpdateUserDto } from "../dto/update-user.dto"
import { User } from "../entities/user.entity"

export abstract class UserRepositoryInterface {

    abstract create(createUserDto: CreateUserDto): Promise<User>;
    abstract findOne(id: number): Promise<User | null>;
    abstract update(id: number, dto: UpdateUserDto): Promise<User>;
    abstract findAll(): Promise<User[]>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract delete(id: number): Promise<User>;
}