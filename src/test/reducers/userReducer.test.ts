import { AnyAction,  ThunkMiddleware } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"
import { getAllUsers, userAuthentication } from '../../redux/methods/userMethod';

import { createStore, RootState } from "../../redux/store"
import server from "../shared/server"

let store: ToolkitStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction, undefined>]>

beforeAll(() => {
    server.listen()
})

beforeEach(() => {
    store = createStore()
})
afterAll(() => {
    server.close()
})

describe("Test userReducer", () => {
    test("Should return initial state", () => {
        const initialState = store.getState().userReducer
        expect(initialState.userList.length).toBe(0)
        expect(initialState.currentUser).toBeUndefined()
    })
    test("should get user list data", async () => {
        await store.dispatch(getAllUsers())
        const state = store.getState().userReducer
        expect (state.userList.length).toBe(4)
    })

    test("should login user with right authentication", async () => {
        const authentication = {
            email: "maria@mail.com",
            password: "12345",
        }
        await store.dispatch(userAuthentication(authentication))
        const currentUser = store.getState().userReducer.currentUser
        expect(currentUser).toBeDefined()
    })
})

