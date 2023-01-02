import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useParamsId } from "../../types/category";

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

export const getSingleCategory = createAsyncThunk(
    "getSingleCategory",
    async (categoryId:useParamsId ) => {
        try {
            const jsondata = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
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
