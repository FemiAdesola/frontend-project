import { createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

import axiosInstance from "../../common/axiosInstance";
import { CreateCategoryType, CategoryType } from '../../types/category';

export const getAllCategories = createAsyncThunk(
    "getAllCategories",
    async () => {
        try {
            const jsondata = await axiosInstance.get("categories")
            return jsondata.data
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

export const createCategory = createAsyncThunk(
    "createCategory",
    async (category: CreateCategoryType) => {
        try {
            const response: AxiosResponse<CategoryType, any> = await axiosInstance.post("categories", category)
            return response.data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(`Error from response: ${error.message}`)
            }else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
               console.log(error.config)
            }
        }
    }
)