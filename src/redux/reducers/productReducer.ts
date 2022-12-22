import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {  Product } from "../../types/product";

const initialState: Product[] = []
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
const productSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {
        sortByName: (state, action:PayloadAction<"asc"|"desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.title.localeCompare(b.title))
            } else {
                state.sort((a, b) => b.title.localeCompare(a.title))
            }
        }
    } /* manage sync process */,
    extraReducers: (build) => {
        build.addCase(getAllProducts.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
            //setState(action.payload)
        })
        build.addCase(getAllProducts.rejected, (state, action) => {
            console.log("error in fetching data")
            return state
        })
        build.addCase(getAllProducts.pending, (state, action) => {
            console.log("data is loading ...")
            return state
        })
    }

})
const productReducer = productSlice.reducer

export const {sortByName} = productSlice.actions
export default productReducer