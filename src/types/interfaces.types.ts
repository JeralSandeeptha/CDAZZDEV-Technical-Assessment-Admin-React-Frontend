export type AuthRequest = {
    email: string,
    password: string
}

export interface IToken {
    token: IToken | null
}

export interface IAdmin{
    id?: string,
    email: string,
    password?: string,
    created_at?: string,
}

export interface IUser{
    id?: number,
    email: string,
    password: string,
    mobile: string,
    address: string,
    fname: string,
    lname: string,
    created_at?: string,
}