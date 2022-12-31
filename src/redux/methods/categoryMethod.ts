import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

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
