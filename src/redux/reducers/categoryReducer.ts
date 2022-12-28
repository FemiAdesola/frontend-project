import { createSlice } from "@reduxjs/toolkit";

import { Category } from "../../types/category";
import { getAllCategories } from "../methods/categoryMethod";

const initialState: Category[] = []

const categorySlice = createSlice({
    name: "categorySlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
            //setState(action.payload)
        })
        builder.addCase(getAllCategories.rejected, (state, action) => {
            console.log("error in fetching data")
            return state
        })
        builder.addCase(getAllCategories.pending, (state, action) => {
            console.log("data is loading ...")
            return state
        })
    }

});


const categoryReducer = categorySlice.reducer

export default categoryReducer