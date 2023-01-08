import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import axiosInstance from "../../common/axiosInstance"
import { Authentications, ReturnedAuthentications, UserType, UserForm } from "../../types/user"

export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async () => {
        try {
            const response = await axiosInstance.get("users")
            const data: UserType[] = response.data
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
            const result = await thunkAPI.dispatch (loginUser (data.access_token))
                return result.payload as UserType
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
            const data: UserType = response.data
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

export const createUserWithSignUp = createAsyncThunk(
    "createUserWithSignUp",
    async (user: UserForm) => {
        try {
            const response = await axiosInstance.post("files/upload", {file:user.avatar[0]}, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            const url: string = response.data.location
            const userResponse = await axiosInstance.post("users", {
                ...user,
                avatar: url
            })
            const data: UserType = userResponse.data
            return data
        } catch (err) {
            const error = err as AxiosError
            if (error.response) {
                console.log(`Error from response: ${error.message}`)
                console.log(error.response.data)
            } else if (error.request) {
                console.log(`Error from request: ${error.request}`)
            } else {
                console.log(error.config)
            }
        }
    }
)