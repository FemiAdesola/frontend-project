import { createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { CreateProductType, ProductType, CreateProductWithImages, UpdateProductType } from '../../types/product';
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
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(`Error from response: ${error.response.status}`)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                 console.log(error.config)
            }
        }
    }
)


export const createProductWithImages = createAsyncThunk(
    "createProductWithImages",
    async ({ images, productCreate }: CreateProductWithImages) => {
        let imageLocations:string[] = []
        try {
            for (let i = 0; i < images.length; i++) {
                const response = await axiosInstance.post("files/upload", images[i],
                    { headers: {'Content-Type': 'multipart/form-data' }
                })
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
                console.log(`Error from response: ${error.response.status}`)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                 console.log(error.config)
            }
        } 
    }
)


export const updateProduct = createAsyncThunk(
    "updateProduct",
    async ({ id, update }: UpdateProductType) => { 
        try {
            const response: AxiosResponse<ProductType, any> = await axiosInstance.put(`products/${id}`)
            return response.data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(`Error from response: ${error.response.status}`)
                console.log(error.response.data)
            } else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                console.log(error.config)
            }
        }
    }

)


