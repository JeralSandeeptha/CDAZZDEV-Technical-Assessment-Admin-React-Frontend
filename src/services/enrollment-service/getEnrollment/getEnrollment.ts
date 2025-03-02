import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetEnrollmentFunctionProps } from "../../../types/functions.types";

const getEnrollment = async (props: GetEnrollmentFunctionProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/enrollment/${props.enrollmentId}/${props.courseId}/${props.studentId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setEnrollment(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getEnrollment;