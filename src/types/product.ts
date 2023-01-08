import { CategoryType} from './category';

export interface ProductType {
    id: number | string;
    title: string;
    price: number;
    description: string;
    category: CategoryType; 
    images: string[]
}

export interface CreateProductType {
    title: string
    description: string
    price: number
    categoryId: number
   images: File[] 
}

export interface CreateProductWithImages{
    images: File[]
    productCreate: CreateProductType
}

export interface UpdateProductType{
    id: number
    update:Partial<ProductType>
}

export interface Error{
    Error:string
}

export interface CartProductType extends ProductType{
    amount: number
}