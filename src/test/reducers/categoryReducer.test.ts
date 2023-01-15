import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"

import { createStore,  RootState } from "../../redux/store"
import { createCategory, getAllCategories } from '../../redux/methods/categoryMethod';
import categoryServer from "../shared/categoryServer";
import { CreateCategoryType } from '../../types/category';

let store: ToolkitStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction, undefined>]>

beforeAll(() => {
    categoryServer.listen()
})

afterAll(() => {
    categoryServer.close()
})

beforeEach(() => {
    store = createStore()
})

describe("Test all the categories actions", () => {
    test("Should return initial category state", () => {
        expect(store.getState().categoryReducer.length).toBe(0)
    })
    test("Should get all products category", async () => {
        await store.dispatch(getAllCategories())
        expect(store.getState().categoryReducer.length).toBe(4)
    })
    test("should create a new category", async () => {
        const newCategory: CreateCategoryType = {
            id: 5,
            name: "Clothes",
            image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6174",
        }
        await store.dispatch(createCategory(newCategory))
        expect(store.getState().categoryReducer.length).toBe(1)
    })
})