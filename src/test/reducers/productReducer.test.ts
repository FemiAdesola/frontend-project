import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"

import { sortByName } from "../../redux/reducers/productReducer"
import { getAllProducts, createProduct,createProductWithImages, updateProduct } from '../../redux/methods/productMethod';
import { createStore, RootState } from "../../redux/store"
import { CreateProductType} from '../../types/product';

import productServer from "../shared/productServer";

let store: ToolkitStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction, undefined>]>

beforeAll(() => {
    productServer.listen()
})

afterAll(() => {
    productServer.close()
})

beforeEach(() => {
    store = createStore()
})

describe("Test all the products actions", () => {
    test("Should return initial product state", () => {
        expect(store.getState().productReducer.length).toBe(0)
    })
    test("Should get all products", async () => {
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
    test("should update available product", async () => {
        await store.dispatch(getAllProducts())
        await store.dispatch(updateProduct(
            {   id:1,
              
                    title: "Luxurious Concrete",
                price: 500,
                description: "Test update",
                images: [],
               
            }
        ))
        expect(store.getState().productReducer.find(product => product.id === 1)?.title).toBe("Luxurious Concrete")
        expect(store.getState().productReducer.find(product => product.id === 1)?.price).toBe(500)
        expect(store.getState().productReducer.find(product => product.id === 1)?.description).toBe("Test update")
    })
    test("should create product with form and images", async () => {
        const image1: File = {
            lastModified: 0,
            name: "test for image1",
            webkitRelativePath: "",
            size: 0,
            type: "",
            arrayBuffer: function (): Promise<ArrayBuffer> {
                throw new Error("Function not implemented.")
            },
            slice: function (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob {
                throw new Error("Function not implemented.")
            },
            stream: function () {
                throw new Error("Function not implemented.")
            },
            text: function (): Promise<string> {
                throw new Error("Function not implemented.")
            }
        }
         const image2: File = {
            lastModified: 0,
            name: "test for image2",
            webkitRelativePath: "",
            size: 0,
            type: "",
            arrayBuffer: function (): Promise<ArrayBuffer> {
                throw new Error("Function not implemented.")
            },
            slice: function (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob {
                throw new Error("Function not implemented.")
            },
            stream: function () {
                throw new Error("Function not implemented.")
            },
            text: function (): Promise<string> {
                throw new Error("Function not implemented.")
            }
        }
        const productCreate: CreateProductType= {
            title: "Test for createProductWithImages",
            price: 1000,
            description: "Test create product",
            categoryId: 2,
            images:[]
        }
        await store.dispatch(createProductWithImages({images:[image1, image2], productCreate }))
        expect(store.getState().productReducer[0].images.length).toBe(2)
        expect(store.getState().productReducer.length).toBe(1)
    })
})