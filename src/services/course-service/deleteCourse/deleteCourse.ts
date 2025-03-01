import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { DeleteCourseFunctionProps } from "../../../types/functions.types";

const deleteCourse = async (props: DeleteCourseFunctionProps) => {
    props.setIsLoading(true);
    try {
        const res = await AxiosClient.delete(`${baseURL}/course/${props.courseId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.getCourses({
            token: props.token,
            setCourses: props.setCourses
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

export default deleteCourse;