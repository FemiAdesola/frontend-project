import { createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { CreateProductType, ProductType, CreateImageType } from '../../types/product';
import axiosInstance from "../../common/axiosInstance";

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        try {
            const jsondata = await axiosInstance.get("products")
            return jsondata.data
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(error.request)  
            } else {
                console.log(error.message)
            }
            console.log(error.config)
        }
    }
)

export const sortByTitle = (state:ProductType[], action:PayloadAction<"asc"|"desc">) => {
    if (action.payload === "asc") {
        state.sort((a, b) => a.title.localeCompare(b.title))
    } else {
        state.sort((a, b) => b.title.localeCompare(a.title))
    }
}

export const sortByCategoryName = (state:ProductType[], action:PayloadAction<"clothes"| "electronics">) => {
    if (action.payload === "clothes") {
        state.sort((a, b) => a.category.name.localeCompare(b.category.name))
    } else {
         state.sort((a, b) => b.category.name.localeCompare(a.category.name))
    }
}

export const sortProductByPrice = (state:ProductType[], action:PayloadAction<"asc"|"desc">) => {
    if (action.payload === "asc") {
        state.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else {
        state.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
}

export const createProduct = createAsyncThunk(
    "createProduct",
    async (product: CreateProductType) => {
        try {
            const response: AxiosResponse<ProductType, ProductType> = await axiosInstance.post("products/", product)
            return response.data
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(error.request)  
            } else {
                console.log(error.message)
            }
            console.log(error.config)
        }
    }
)

export const getSingleProduct = createAsyncThunk(
    "getSingleProduct",
    async (productId:string) => {
        try {
            const jsondata = await axiosInstance.get(`products/${productId}`)
            return jsondata.data
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(error.request)  
            } else {
                console.log(error.message)
            }
            console.log(error.config)
        }
    }
)


export const createImages = createAsyncThunk(
    "createImages",
    async (files: CreateImageType) => {
        try {
            const response = files && await axiosInstance.post("files/upload", {
            file: files
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            return response.data
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.status)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(error.request)  
            } else {
                console.log(error.message)
            }
            console.log(error.config)
        }
    }
)
  
export const sortProductCategories= (state:ProductType[], action:PayloadAction<"others"|"clothes">) => {
    if (action.payload === "others") {
        state.sort((a, b) => (a.category > b.category ? 1 : -1));
    } else {
        state.sort((a, b) =>
            (action.payload === "clothes")
                ? a.category > b.category
                        ? 1
                        : -1
                        : a.category > b.category
                        ? -1
                        : 1

            );
    }
}

