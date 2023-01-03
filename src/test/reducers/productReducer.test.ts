import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"
// import axios from "axios"
// import { WritableDraft } from "immer/dist/internal"

import {  sortByName } from "../../redux/reducers/productReducer"
import { getAllProducts, createProduct } from "../../redux/methods/productMethod"
import { createStore, RootState } from "../../redux/store"
import { CreateProductType} from "../../types/product"
import server from "../shared/server"

let store: ToolkitStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction, undefined>]>

beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})

beforeEach(() => {
    store = createStore()
})

describe("Test all the products actions", () => {
    test("Should return initial product state", () => {
        expect(store.getState().productReducer.length).toBe(0)
    })
    test("Shou get all products", async () => {
        await store.dispatch(getAllProducts())
        expect(store.getState().productReducer.length).toBe(3)
    })
    test("should create a new product", async () => {
        const newProduct: CreateProductType = {
            title: "Book",
            price: 1000,
            description: "Test create product",
            categoryId: 1,
            images: []
        }
        await store.dispatch(createProduct(newProduct))
        expect(store.getState().productReducer.length).toBe(1)
    })
    test("should not create a new product", async () => {
        const newProduct: CreateProductType = {
            title: "Electronics",
            price: -1000,
            description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
            categoryId: 2,
            images: []
        }
        await store.dispatch(createProduct(newProduct))
        expect(store.getState().productReducer.length).toBe(0)
    })
    test("should sort by title in ascending order", async () => {
        await store.dispatch(getAllProducts())
        store.dispatch(sortByName("asc"))
        expect(store.getState().productReducer[0].title).toBe("Adapter")
        expect(store.getState().productReducer[1].title).toBe("Incredible Rubber Ball")
        expect(store.getState().productReducer[2].title).toBe("Luxurious Concrete Soap")
    })
})