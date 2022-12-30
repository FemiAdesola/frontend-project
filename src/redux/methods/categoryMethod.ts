import { createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../../types/category";

export const getAllCategories = createAsyncThunk(
    "getAllCategories",
    async () => {
        try {
            const jsondata = await axios.get("https://api.escuelajs.co/api/v1/categories")
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

export const sortByCategoryName = (state:Category[], action:PayloadAction<"clothes"|"others"|"furniture"|"shoes"|"electronics">) => {
    if (action.payload === "clothes") {
        state.sort((a, b) => a.name.localeCompare(b.name))
    } else if (action.payload === "furniture") {
        state.sort((a, b) => b.name.localeCompare(a.name))
    }else if (action.payload === "shoes") {
        state.sort((a, b) => b.name.localeCompare(a.name))
    }else if (action.payload === "others") {
        state.sort((a, b) => b.name.localeCompare(a.name))
    } else if (action.payload === "electronics") {
        state.sort((a, b) => b.name.localeCompare(a.name))
    } else {
         state.sort((a, b) => b.name.localeCompare(a.name))
    }
}