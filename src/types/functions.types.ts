import { Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { AuthRequest, IToken, IUser } from "./interfaces.types"

export type RegisterUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    user: AuthRequest,
    navigate: NavigateFunction
}

export type RegisterStudentFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    user: AuthRequest,
    navigate: NavigateFunction,
    token: IToken | null
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

export type GetStudentsFunctionProps = {
    token: IToken | null,
    setStudents: Dispatch<SetStateAction<IUser[]>>,
}

export type DeleteStudentFunctionProps = {
    token: IToken | null,
    studentId: number | undefined
    setStudents: Dispatch<SetStateAction<IUser[]>>,
    getStudents: (props: GetStudentsFunctionProps) => Promise<void>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
}