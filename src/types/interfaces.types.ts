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