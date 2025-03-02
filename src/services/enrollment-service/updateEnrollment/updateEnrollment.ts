import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { UpdateEnrollmentFunctionProps } from "../../../types/functions.types";

const updateEnrollment = async (props: UpdateEnrollmentFunctionProps) => {
    props.setIsLoading(true);
    try {
        const res = await AxiosClient.put(`${baseURL}/enrollment/${props.enrollmentId}`, props.enrollment, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setIsSuccess(true);
        setTimeout(() => {
          props.setIsLoading(false);
          props.setIsSuccess(false);
          props.navigate('/enrollments');
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

export default updateEnrollment;