import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { UpdateStudentFunctionProps } from "../../../types/functions.types";

const updateStudent = async (props: UpdateStudentFunctionProps) => {
    props.setIsLoading(true);
    try {
        const res = await AxiosClient.put(`${baseURL}/student/${props.studentId}`, props.user, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setIsSuccess(true);
        setTimeout(() => {
          props.setIsLoading(false);
          props.setIsSuccess(false);
          props.navigate('/students');
        }, 2000);
    } catch (error) {
        console.error(error);
        props.setIsError(true);
        setTimeout(() => {
          props.setIsLoading(false);
          props.setIsError(false);
        }, 2000);
    }
}

export default updateStudent;