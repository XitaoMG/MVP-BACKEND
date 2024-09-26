import { Injectable, Provider } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Menu } from "../entities/menu.entity";
import { MenuRepositoryInterface } from "../interfaces/menu.repository.interface";
import { CreateMenuDto } from "../dto/create-menu.dto";
import { UpdateMenuDto } from "../dto/update-menu.dto";


@Injectable()
export class MenuRepository implements MenuRepositoryInterface {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    async findOne(id: number): Promise<Menu | null> {
        const menu = await this.prisma.menu.findUnique({
            where: {
                id,
            }
        })
        if (menu) {
            return menu;
        } else {
            return null;
        }
    }

    async update(id: number, dto: UpdateMenuDto): Promise<Menu> {
        return this.prisma.menu.update({
            data: dto,
            where: {
                id,
            },
        });
    }

    create(createMenuDto: CreateMenuDto): Promise<Menu> {
        const menu = this.prisma.menu.create({
            data: createMenuDto
        });
        return menu;
    }

    findAll(): Promise<Menu[]> {
        return this.prisma.menu.findMany();
    }

    findByRestaurantId(restaurantId: number): Promise<Menu[]> {
        if (!restaurantId) throw new Error("Method not implemented.");
        return this.prisma.menu.findMany({
            where: {
                restaurantId,
            },
            include: { restaurant: true }
        });
    }

    delete(id: number): Promise<Menu> {
        return this.prisma.menu.delete({
            where: {
                id,
            }
        });
    }
}

export const ProviderMenuRepository:
    Provider<MenuRepositoryInterface> = {
    provide: MenuRepositoryInterface,
    useClass: MenuRepository
}