import { Dispatch, JSX, SetStateAction } from "react";
import { IToken, IUser } from "./interfaces.types";
import { GetStudentsFunctionProps } from "./functions.types";

export type AuthContextType = {
    token: IToken | null;
    setToken: Dispatch<SetStateAction<IToken | null>>;
};

export type PrivateRouteProps = {
    element: JSX.Element;
};

export type PublicRouteProps = {
    element: JSX.Element;
};

export type PageHeaderProps = {
    title: string,
    description: string,
    image?: string
}

export type StudentsListComponentprops = {
    students: IUser[],
    setStudents: Dispatch<SetStateAction<IUser[]>>;
    getStudents: (props: GetStudentsFunctionProps) => Promise<void>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
}
export type StudentComponentprops = {
    student: IUser,
    getStudents: (props: GetStudentsFunctionProps) => Promise<void>,
    setStudents: Dispatch<SetStateAction<IUser[]>>
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
}