import { Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { AuthRequest, IToken } from "./interfaces.types"

export type RegisterUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    user: AuthRequest,
    navigate: NavigateFunction
}

export type LoginUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    user: AuthRequest,
    navigate: NavigateFunction,
    setLocalStorageItem: (itemName: string, itemData: unknown) => void,
    setToken: Dispatch<SetStateAction<IToken | null>>
}

export type HandleLoginFunctionProps = { email: string, password: string };

export type HandleRegisterFunctionProps = { email: string, password: string };

export type AuthProviderProps = {
    children: React.ReactNode
}