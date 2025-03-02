import { Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { AuthRequest, ICourse, IEnrollment, IToken, IUser } from "./interfaces.types"

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

export type GetEnrollmentsFunctionProps = {
    token: IToken | null,
    setEnrollments: Dispatch<SetStateAction<IEnrollment[]>>,
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

export type DeleteCourseFunctionProps = {
    token: IToken | null,
    courseId: number | undefined,
    setCourses: Dispatch<SetStateAction<ICourse[]>>,
    getCourses: (props: GetAllCouresFunctionProps) => Promise<void>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
}

export type DeleteEnrollmentFunctionProps = {
    token: IToken | null,
    enrollmentId: number | undefined,
    setEnrollments: Dispatch<SetStateAction<IEnrollment[]>>,
    getEnrollments: (props: GetEnrollmentsFunctionProps) => Promise<void>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
}

export type GetStudentFunctionProps = {
    token: IToken | null,
    studentId: string | undefined,
    setStudent: Dispatch<SetStateAction<IUser | undefined>>,
}

export type UpdateStudentFunctionProps = {
    token: IToken | null,
    studentId: string | undefined,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    navigate: NavigateFunction,
    user: { fname: string, lname: string, mobile: string, address: string }
};

export type UpdateCourseFunctionProps = {
    token: IToken | null,
    courseId: string | undefined,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    navigate: NavigateFunction,
    course: { title: string, description: string, image: string, instructor: string, start_date: string, end_date: string }
};

export type UpdateEnrollmentFunctionProps = {
    token: IToken | null,
    enrollmentId: string | undefined,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    navigate: NavigateFunction,
    enrollment: { student_id: string, course_id: string, status: string, enrollment_date: Date }
};

export type GetAllCouresFunctionProps = {
    token: IToken | null,
    setCourses: Dispatch<SetStateAction<ICourse[]>>
}

export type GetSingleCourseFunctionProps = {
    setCourse: Dispatch<SetStateAction<ICourse | undefined>>,
    token: IToken | null,
    courseId: string | undefined
}

export type GetEnrollmentFunctionProps = {
    setEnrollment: Dispatch<SetStateAction<IEnrollment | undefined>>,
    token: IToken | null,
    enrollmentId: string | undefined,
    studentId?: string | undefined,
    courseId?: string | undefined,
}

export type AddCourseFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    course: { image: string, title: string, description: string, instructor: string, start_date: string, end_date: string },
    navigate: NavigateFunction,
    token: IToken | null
}

export type AddEnrollmentFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    enrollment: { course_id: string, student_id: string },
    navigate: NavigateFunction,
    token: IToken | null
}

