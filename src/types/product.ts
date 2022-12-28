import { Category } from './category';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category; 
    images: string[]
}

export interface CreateProduct {
    title: string
    decription: string
    price: number
    categoryId: number
    images: string[]
}

export interface CreateImage {
   images: string[]
}