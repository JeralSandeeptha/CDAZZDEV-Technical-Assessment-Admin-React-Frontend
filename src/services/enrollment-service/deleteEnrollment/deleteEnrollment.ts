import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { DeleteEnrollmentFunctionProps } from "../../../types/functions.types";

const deleteEnrollment = async (props: DeleteEnrollmentFunctionProps) => {
    props.setIsLoading(true);
    try {
        const res = await AxiosClient.delete(`${baseURL}/enrollment/${props.enrollmentId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.getEnrollments({
            token: props.token,
            setEnrollments: props.setEnrollments
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

export default deleteEnrollment;