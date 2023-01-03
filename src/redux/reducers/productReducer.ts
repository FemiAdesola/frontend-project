import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "../../types/product";
import {
    getAllProducts,
    sortByTitle,
    createProduct,
    sortByCategoryName,
    sortProductByPrice,
   createImages,
   sortProductCategories,
   getSingleProduct
} from "../methods/productMethod";

const initialState: ProductType[] = []

const productSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {
        sortByName: sortByTitle,
        sortByCategory: sortByCategoryName,
        sortByPrice: sortProductByPrice,
        sortProductCategory:sortProductCategories
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
            return state
        })
        build.addCase(getAllProducts.pending, (state, action) => {
            return state
        })
        build.addCase(createProduct.fulfilled, (state, action) => {
            if (action.payload) {
                state.push(action.payload)
            } else {
                return state
            }
        })
        build.addCase(createImages.fulfilled, (state, action) => {
            if (action.payload) {
                state.push(action.payload)
            } else {
                return state
            }
        })

         build.addCase(getSingleProduct.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state
            } else if (!action.payload) {
                return state
            }
            return action.payload
            //setState(action.payload)
        })
        build.addCase(getSingleProduct.rejected, (state, action) => {
            return state
        })
        build.addCase(getSingleProduct.pending, (state, action) => {
            return state
        })

    }

})
const productReducer = productSlice.reducer

export const {sortByName, sortByCategory, sortByPrice, sortProductCategory} = productSlice.actions
export default productReducer