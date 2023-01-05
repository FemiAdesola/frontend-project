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
}

export interface Credentials {
    email: string
    password: string
}

export interface ReturnedCredentials{
access_token: string
}

export interface CreateUser{
    email: string
    password: string
    name: string
    role: Role
    avatar: string
}
