import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetStudentFunctionProps } from "../../../types/functions.types";

const getStudent = async (props: GetStudentFunctionProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/student/${props.studentId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setStudent(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getStudent;