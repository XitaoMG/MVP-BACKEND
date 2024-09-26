import { Menu } from "src/menu/entities/menu.entity";

export class Restaurant {
    id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    country: string;
    phoneNumber: string;
    email: string;
    image: string;
    menu?: Menu[];
}