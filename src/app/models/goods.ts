export interface IGoods {
    imageUrl: string;
    aquaSecurity: boolean;
    bestseller: boolean;
    discount: number;
    name: string;
    novelty: boolean;
    price: number;
    rating: number;
}

export interface IFilteredGoods {
    beginPrice: number;
    endPrice: number;
    novelty: boolean;
    bestseller: boolean;
    aquadef: boolean;
}