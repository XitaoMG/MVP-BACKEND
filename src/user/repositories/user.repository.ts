import { Injectable, Provider } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "../entities/user.entity";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";
import { hash } from "bcrypt";


@Injectable()
export class UserRepository implements UserRepositoryInterface {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    async findOne(id: number): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            }
        })
        if (user) {
            return user;
        } else {
            return null;
        }
    }

    async update(id: number, dto: UpdateUserDto): Promise<User> {
        return this.prisma.user.update({
            data: dto,
            where: {
                id,
            },
        });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await hash(createUserDto.password, 10)
        const user = this.prisma.user.create({
            data: {
                id: createUserDto.id,
                name: createUserDto.name,
                email: createUserDto.email,
                password: hashedPassword,
            },
        });
        return user;
    }

    findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findByEmail(email: string): Promise<User> {
        return await this.prisma.user.findUnique({
            where: {
                email: email,
            }
        });
    }

    delete(id: number): Promise<User> {
        return this.prisma.user.delete({
            where: {
                id,
            }
        });
    }
}

export const ProviderUserRepository:
    Provider<UserRepositoryInterface> = {
    provide: UserRepositoryInterface,
    useClass: UserRepository
}