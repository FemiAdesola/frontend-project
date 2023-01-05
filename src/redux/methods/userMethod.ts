import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import axiosInstance from "../../common/axiosInstance"
import { Authentications, ReturnedAuthentications, User } from "../../types/user"


export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async () => {
        try {
            const response = await axiosInstance.get("users")
            const data: User[] = response.data
            return data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(`Error from response: ${error.message}`)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                 console.log(error.config)
            }
            return error
        }
    }
)

export const userAuthentication = createAsyncThunk(
    "userAuthentication",
    async ({ email, password }: Authentications, thunkAPI ) => {
        try {
            const response = await axiosInstance.post("auth/login", { email, password })
            const data: ReturnedAuthentications = response.data
            const result = await thunkAPI.dispatch (loginUser (data.access_token) )
                return result.payload as User
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(`Error from response: ${error.message}`)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                console.log(error.config)
            }
            return error
        }
    }
)

export const loginUser = createAsyncThunk(
    "loginUser",
    async (access_token: string) => {
        try {
            const response = await axiosInstance.get("auth/profile", {
                headers: { "Authorization": ` Bearer ${access_token}` }
            })
            const data: User = response.data
            return data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(`Error from response: ${error.message}`)
                console.log(error.response.data)
            }else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                 console.log(error.config)
            }
            // return error
        }
    }
)
