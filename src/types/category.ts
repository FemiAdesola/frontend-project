export interface CategoryType {
    id: number;
    name: string;
    image: string;
}
export interface CreateCategoryType {
    name: string;
    image: string;
    id?: number;
}