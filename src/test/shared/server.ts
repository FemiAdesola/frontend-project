import { rest } from "msw";
import {setupServer} from "msw/node"
import { CreateProductType } from "../../types/product";

const handler = [
    rest.get("https://api.escuelajs.co/api/v1/products", (req, res, next) => {
        return res(
            next.json(
                [
                    {
                        id: 1,
                        title: "Adapter",
                        price: 491,
                        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
                        category: {
                            "id": 4,
                            "name": "Shoes",
                            "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=8827"
                        },
                        images: [
                            "https://api.lorem.space/image/shoes?w=640&h=480&r=1877",
                            "https://api.lorem.space/image/shoes?w=640&h=480&r=312",
                            "https://api.lorem.space/image/shoes?w=640&h=480&r=5418"
                        ]
                    },
                    {
                        id: 2,
                        title: "Luxurious Concrete Soap",
                        price: 500,
                        description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                        category: {
                            "id": 2,
                            "name": "Shoes",
                            "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=1667",
                        },
                        images: [
                            "https://api.lorem.space/image/shoes?w=640&h=480&r=3226",
                            "https://api.lorem.space/image/shoes?w=640&h=480&r=9051",
                            "https://api.lorem.space/image/shoes?w=640&h=480&r=751"
                        ]
                    },
                    {
                        id: 3,
                        title: "Incredible Rubber Ball",
                        price: 150,
                        description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                        category: {
                            "id": 5,
                            "name":"Others",
                            "image": "https://api.lorem.space/image?w=640&h=480&r=3464",
                        },
                        images: [
                            "https://api.lorem.space/image?w=640&h=480&r=9725",
                            "https://api.lorem.space/image?w=640&h=480&r=828",
                            "https://api.lorem.space/image?w=640&h=480&r=4717"
                        ]
                    }
                ]
            )
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/products/",async(req, res, next) => {
        const product:CreateProductType = await req.json()
        if (product.price < 1000) {
            return res(
                next.status(400, "Data is invalid")
            )
        }
        return res(
            next.json(product)
        )
    })
]

const server = setupServer(...handler)
export default server