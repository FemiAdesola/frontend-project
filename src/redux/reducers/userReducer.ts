import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { UserReducer } from "../../types/user"; 
import { getAllUsers} from "../methods/userMethod";

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
                //return state
            }

        })
    }
});

const userReducer= userSlice.reducer

export default userReducer