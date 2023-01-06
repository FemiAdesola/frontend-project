export type Role = "admin" | "customer"
export interface UserType  extends UserForm{
    id: number
    role: Role
    avatar: string
    confirm_password: undefined
}

export interface UserReducer {
    userList: UserType[]
    currentUser?: UserType
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

export interface UserForm{
    email: string
    password: string
    name: string
    confirm_password?: string
    avatar: File[] | string
}