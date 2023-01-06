import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { UserReducer } from "../../types/user"; 
import { createUserWithSignUp, getAllUsers, loginUser, userAuthentication } from "../methods/userMethod";

const initialState: UserReducer = {
    userList: []
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getAllUsers.fulfilled, (state, action) => {
            if (action.payload instanceof AxiosError) {
                return state
            } else {
               state.userList = action.payload
            }

        })
            .addCase(userAuthentication.fulfilled, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    return state
                } else {
                    state.currentUser = action.payload
                }
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    return state
                } else {
                    state.currentUser = action.payload
                }
            })
            .addCase(createUserWithSignUp.fulfilled, (state, action) => {
              if (action.payload instanceof AxiosError) {
                  if (action.payload.request) {
                       console.log("requesterror", action.payload.request)
                  } else {
                      console.log("requesterror", action.payload.response)
                   }
                }
            })
    }
});

const userReducer= userSlice.reducer

export default userReducer