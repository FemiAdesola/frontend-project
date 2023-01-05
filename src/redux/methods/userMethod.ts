import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import axiosInstance from "../../common/axiosInstance"
import { User } from "../../types/user"

export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async () => {
        try {
            const response = await axiosInstance.get("users")
            const data: User[] = response.data
            return data
        } catch (e) {
            const error = e as AxiosError
            return error
        }
    }
)

