import { rest } from "msw";
import { setupServer } from "msw/node"
import jwt from "jsonwebtoken"

import { CategoryType } from "../../types/category"

const userApi = [
    {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=8350",
  },
  {
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name: "Maria",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6716",
  },
  {
    id: 3,
    email: "admin@mail.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=7253"
  },
  {
    id: 4,
    email: "john@mail.com",
    password: "changeme",
    name: "dammy",
    role: "customer",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=3871",
  },
]             
const handler = [
    rest.get("https://api.escuelajs.co/api/v1/users", (req,res,context) => {
        return res(
            context.json(userApi)
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/auth/login", async (req, res, context) => {
        const { email, password } = await req.json()
        const foundUser = userApi.find (user => user.email === email && user.password === password)
        if (foundUser) {
            const access_token = jwt.sign( foundUser, 'femi12345');
            return res(
                context.json({access_token})
            )
        } else {
            return res(
                context.status(401, "User is not authorized to login")
            )
        }
    }),
    rest.get("https://api.escuelajs.co/api/v1/auth/profile", (req, res, context) => {
        const access_tokenArray = req.headers.get("Authorization")?.split(" ")
        try {
            if (access_tokenArray) {
                const access_token = access_tokenArray[1]
                const foundUser = jwt.verify(access_token, 'femi12345')
                return res(
                    context.json({
                        foundUser
                    })
                )
            } else {
                context.status(401, "User is not authorized to login")
            }
        } catch (err:any) {
            return res(
                context.json(err)
            ) 
        }
    })
]

const userServer = setupServer(...handler)
export default userServer