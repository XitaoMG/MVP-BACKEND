import { Injectable, Provider } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Restaurant } from "../entities/restaurant.entity";
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.repository.interface";
import { UpdateRestaurantDto } from "../dto/update-restaurant.dto";
import { CreateRestaurantDto } from "../dto/create-restaurant.dto";


@Injectable()
export class RestaurantRepository implements RestaurantRepositoryInterface {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    async findOne(id: number): Promise<Restaurant | null> {
        const restaurant = await this.prisma.restaurant.findUnique({
            where: {
                id
            }
        })
        if (restaurant) {
            return restaurant;
        } else {
            return null;
        }
    }

    async update(id: number, dto: UpdateRestaurantDto): Promise<Restaurant> {
        return this.prisma.restaurant.update({
            data: dto,
            where: {
                id,
            },
        });
    }

    create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        const restaurant = this.prisma.restaurant.create({
            data: createRestaurantDto
        });
        return restaurant;
    }

    findAll(): Promise<Restaurant[]> {
        return this.prisma.restaurant.findMany();
    }

    findByTerm(term: string): Promise<Restaurant[]> {
        return this.prisma.restaurant.findMany({
            include: { menu: true }
        });
    }

    delete(id: number): Promise<Restaurant> {
        return this.prisma.restaurant.delete({
            where: {
                id,
            },
        });
    }
}

export const ProviderRestaurantRepository:
    Provider<RestaurantRepositoryInterface
    > = {
    provide: RestaurantRepositoryInterface,
    useClass: RestaurantRepository
}