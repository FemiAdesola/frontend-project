import { createSlice } from "@reduxjs/toolkit";

import { CategoryType } from "../../types/category";
import { createCategory, getAllCategories } from '../methods/categoryMethod';

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
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                return state
            })
            .addCase(getAllCategories.pending, (state, action) => {
                return state
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                if (action.payload) {
                    state.push(action.payload)
                } else {
                    return state
                }
            })
    }

});

const categoryReducer = categorySlice.reducer
export default categoryReducer