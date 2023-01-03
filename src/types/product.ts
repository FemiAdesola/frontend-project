import { CategoryType, Rating } from './category';

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: CategoryType; 
     images: string[]
    // category: string; 
    // image: string;
    // rating:Rating
   
}

export interface CreateProductType {
    title: string
    description: string
    price: number
    categoryId: number
    images: string[]
}

export interface CreateProductWithImages{
    images: File[]
    productCreate: CreateProductType
}