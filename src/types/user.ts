export type Role = "admin" | "customer"
export interface User {
    id: number
    email: string
    password: string
    name: string 
    role: Role
    avatar: string
}

export interface UserReducer {
    userList: User[]
    currentUser?: User
    access_token?: string
}

export interface Authentications {
    email: string
    password: string
}

export interface ReturnedAuthentications{
access_token: string
}

export interface CreateUser{
    email: string
    password: string
    name: string
    role: Role
    avatar: string
}
