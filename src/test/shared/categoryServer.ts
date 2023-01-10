import { rest } from "msw";
import { setupServer } from "msw/node"
import jwt from "jsonwebtoken"
import { CreateCategoryType } from "../../types/category";

const categoryApi = [
    {
        id: 1,
        name: "Clothes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6174",
    },
    {
        id: 2,
        name: "Electronics",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6174", 
    },
    {
        id: 3,
        name: "Furniture",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6174", 
    },
    {
         id: 4,
        name: "Shoes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6174", 
    }
]
          
const handler = [
    rest.get("https://api.escuelajs.co/api/v1/categories", (req, res, context) => {
        return res(
            context.json(
                categoryApi
            )
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/categories", async (req, res, context) => {
         const category: CreateCategoryType= await req.json()
        if (!category) {
            return res(
                context.status(400, "Data is invalid")
            )
        }
        return res(
            context.json(category)
        )
    }),
    
]

const categoryServer = setupServer(...handler)
export default categoryServer