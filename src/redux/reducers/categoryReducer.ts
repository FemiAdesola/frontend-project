import { createSlice } from "@reduxjs/toolkit";

import { CategoryType } from "../../types/category";
import { getAllCategories, getSingleCategory } from '../methods/categoryMethod';

const initialState: CategoryType[] = []

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

          builder.addCase(getSingleCategory.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
            //setState(action.payload)
        })
        builder.addCase(getSingleCategory.rejected, (state, action) => {
            console.log("error in fetching data")
            return state
        })
        builder.addCase(getSingleCategory.pending, (state, action) => {
            console.log("data is loading ...")
            return state
        })
    }

});

const categoryReducer = categorySlice.reducer

export default categoryReducer