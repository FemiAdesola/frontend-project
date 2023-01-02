import { Category, Rating } from './category';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    // category: Category; 
    //  images: string[]
    category: string; 
    image: string;
    rating:Rating
   
}

export interface CreateProduct {
    title: string
    description: string
    price: number
    categoryId: number
    images: string[]
}

export interface CreateImage {
   images: string[]
}