import { createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { useParamsId } from "../../types/category";
import axiosInstance from "../../common/axiosInstance";

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

export const getSingleCategory = createAsyncThunk(
    "getSingleCategory",
    async (categoryId:useParamsId ) => {
        try {
            const jsondata = await axiosInstance.get(`categories/${categoryId}`)
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
