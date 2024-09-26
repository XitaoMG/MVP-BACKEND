import { Injectable, Provider } from "@nestjs/common";
import { FindByTermInterface } from "../interfaces/use-cases/find-by-term.interface";
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.repository.interface";
import { Restaurant } from "../entities/restaurant.entity";


@Injectable()
export class FindByTerm implements FindByTermInterface {

    constructor(
        private readonly restaurantRepository: RestaurantRepositoryInterface
    ) { }

    async execute(term: string): Promise<Restaurant[]> {
        if (!term) throw new Error("Term not found!");
        const normalizedTerm = this.normalizeString(term);
        const result = await this.restaurantRepository.findByTerm(term);

        return result.filter(res => {
            const normalizedName = this.normalizeString(res.name);

            return normalizedName.includes(normalizedTerm) ||
                res.menu.some(item =>
                    this.normalizeString(item.name).includes(normalizedTerm) ||
                    this.normalizeString(item.description).includes(normalizedTerm)
                );
        });
    }

    private normalizeString(str: string): string {
        return str
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }
}

export const ProviderFindByTerm: Provider<FindByTermInterface> = {
    provide: FindByTermInterface,
    useClass: FindByTerm
}