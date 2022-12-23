import { createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { CreateProduct, Product } from '../../types/product';

export const getAllProducts = createAsyncThunk(
    "getAllProducts",
    async () => {
        try {
            const jsondata = await axios.get("https://api.escuelajs.co/api/v1/products")
            return jsondata.data
        } catch (error: any) {
            if (error.respons) {
                console.log(error.response.status)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(error.request)  
            } else {
                console.log(error.message)
            }
            console.log(error.conf)
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

export const createProduct = createAsyncThunk(
    "createProduct",
    async (product: CreateProduct) => {
        try {
            const response: AxiosResponse<Product, Product> = await axios.post("https://api.escuelajs.co/api/v1/products/", product)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)