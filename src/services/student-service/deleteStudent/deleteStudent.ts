import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { DeleteStudentFunctionProps } from "../../../types/functions.types";

const deleteStudent = async (props: DeleteStudentFunctionProps) => {
    props.setIsLoading(true);
    try {
        const res = await AxiosClient.delete(`${baseURL}/student/${props.studentId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.getStudents({
            setStudents: props.setStudents,
            token: props.token
        });
        props.setIsSuccess(true);
        setTimeout(() => {
            props.setIsSuccess(false);
            props.setIsLoading(false);
        }, 2000);
    } catch (error) {
        console.error(error);
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
            props.setIsLoading(false);
        }, 2000);
    }
}

export default deleteStudent;