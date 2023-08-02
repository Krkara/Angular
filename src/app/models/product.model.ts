import { Category } from './category.model';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public image: string,
        public active: boolean,
        public description: string,
        public stock: number,
        public category: Category
    ) {
    }
}