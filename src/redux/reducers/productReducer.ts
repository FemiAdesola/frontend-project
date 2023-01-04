import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "../../types/product";
import { updateProduct } from '../methods/productMethod';
import {
    getAllProducts,
    sortByTitle,
    createProduct,
    sortByCategoryName,
    sortProductByPrice,
    createProductWithImages,
} from "../methods/productMethod";

const initialState: ProductType[] = []

const productSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {
        sortByName: sortByTitle,
        sortByCategory: sortByCategoryName,
        sortByPrice: sortProductByPrice,
    },
    extraReducers: (build) => {
        build.addCase(getAllProducts.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
        })
            .addCase(getAllProducts.rejected, (state, action) => {
                return state
            })
            .addCase(getAllProducts.pending, (state, action) => {
                return state
            })
        build.addCase(createProduct.fulfilled, (state, action) => {
            if (action.payload) {
                state.push(action.payload)
            } else {
                return state
            }
            })
            .addCase(createProductWithImages.fulfilled, (state, action) => {
                if (action.payload) {
                    state.push(action.payload)
                } else {
                    return state 
                }
            })
        build.addCase(updateProduct.fulfilled, (state, action) => {
            return state.map(product => {
                if (product.id === action.payload?.id) {
                    return action.payload
                }
                return product
                })
            })
            .addCase(updateProduct.rejected, (state, action) => {
                return state
            })
            .addCase(updateProduct.pending, (state, action) => {
                return state
            })
    }

})
const productReducer = productSlice.reducer

export const {sortByName, sortByCategory, sortByPrice} = productSlice.actions
export default productReducer