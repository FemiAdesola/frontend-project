import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"

import { createStore, RootState } from "../../redux/store"
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

describe("Test all the products actions", () => {
    test("Should return initial product state", () => {
        expect(store.getState().categoryReducer.length).toBe(0)
    })
    test("Shou get all products", async () => {
        await store.dispatch(getAllCategories())
        expect(store.getState().categoryReducer.length).toBe(4)
    })
    test("should create a new product", async () => {
        const newCategory: CreateCategoryType = {
            id: 5,
            name: "Clothes",
            image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6174",
        }
        await store.dispatch(createCategory(newCategory))
        console.log(newCategory)
        expect(store.getState().categoryReducer.length).toBe(1)
    })
})