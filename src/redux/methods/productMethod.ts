import { createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

import { CreateProductType, ProductType, CreateProductWithImages, UpdateValueType } from '../../types/product';
import axiosInstance from "../../common/axiosInstance";

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        try {
            const jsondata = await axiosInstance.get("products")
            return jsondata.data
        } catch (err) {
             const error = err as AxiosError
            if (error.response) {
                return(error.response.status)
                   ? error.response.data as AxiosResponse<Error>
                    : error.response
            }else if (error.request) {
                return(error.request)  
            } else {
                return(error.message)
            }
            
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

export const createProductWithImages = createAsyncThunk(
    "createProductWithImages",
    async ({ images, productCreate }: CreateProductWithImages) => {
       let imageLocations: string[] = []
        try {
                for (let i = 0; i < images.length; i++) { 
                const response = await axiosInstance.post("files/upload", {files:images[i]})
                const data = response.data.location
                imageLocations.push(data)
            }
            const productResponse = await axiosInstance.post("products", {
                ...productCreate,
                images: [...productCreate.images, ...imageLocations]
            })
            return productResponse.data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                return(error.response.data)
            }else if (error.request) {
                return(`Error from request: ${error.message}`)
            } else {
                return(error.config)
            }  
        } 
    }
)
export const createProduct = createAsyncThunk(
    "createProduct",
    async (product: CreateProductType) => {
        try {
            const response: AxiosResponse<ProductType, any> = await axiosInstance.post("products", product )
            const data:ProductType = response.data
            return data
        } catch (err) {
            const error = err as AxiosError
            throw new Error(error.message)
        }
    }
)

export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (update: UpdateValueType) => { 
        try {
            const response: AxiosResponse<ProductType, any> = await axiosInstance.put(`products/${update.id}`,
                {
                title: update.title,
                price: update.price,
                description: update.description,
                }
            )
            return response.data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(error.response.data)
            } else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                console.log(error.config)
            }
        }
    }

)

export const deleteProduct = createAsyncThunk(
    "deletedProduct",
    async (id:string|undefined) => {
        try {
            const response: AxiosResponse<ProductType, any> = await axiosInstance.delete(`products/${id}`)
            return response.data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(error.response.data)
            } else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                console.log(error.config)
            }
        }
    }
)