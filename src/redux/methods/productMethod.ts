import { createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { CreateProduct, Product, CreateImage } from '../../types/product';

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        try {
            const jsondata = await axios.get("https://api.escuelajs.co/api/v1/products")
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

export const sortByTitle = (state:Product[], action:PayloadAction<"asc"|"desc">) => {
    if (action.payload === "asc") {
        state.sort((a, b) => a.title.localeCompare(b.title))
    } else {
        state.sort((a, b) => b.title.localeCompare(a.title))
    }
}

export const sortByCategoryName = (state:Product[], action:PayloadAction<"clothes"|"others"|"furniture"|"shoes"|"electronics">) => {
    if (action.payload === "clothes") {
        state.sort((a, b) => a.category.name.localeCompare(b.category.name))
    } else if (action.payload === "furniture") {
        state.sort((a, b) => b.category.name.localeCompare(a.category.name))
    }else if (action.payload === "shoes") {
        state.sort((a, b) => b.category.name.localeCompare(a.category.name))
    }else if (action.payload === "others") {
        state.sort((a, b) => b.category.name.localeCompare(a.category.name))
    } else if (action.payload === "electronics") {
        state.sort((a, b) => b.category.name.localeCompare(a.category.name))
    } else {
         state.sort((a, b) => b.category.name.localeCompare(a.category.name))
    }
}

export const sortProductByPrice = (state:Product[], action:PayloadAction<"asc"|"desc">) => {
    if (action.payload === "asc") {
        state.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else {
        state.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
}

export const createProduct = createAsyncThunk(
    "createProduct",
    async (product: CreateProduct) => {
        try {
            const response: AxiosResponse<Product, Product> = await axios.post("https://api.escuelajs.co/api/v1/products/", product)
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

export const createImages = createAsyncThunk(
    "createImages",
    async (files: CreateImage) => {
        try {
            const response = files && await axios.post("https://api.escuelajs.co/api/v1/files/upload", {
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