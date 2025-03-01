import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { UpdateCourseFunctionProps } from "../../../types/functions.types";

const updateCourse = async (props: UpdateCourseFunctionProps) => {
    props.setIsLoading(true);
    try {
        const res = await AxiosClient.put(`${baseURL}/course/${props.courseId}`, props.course, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setIsSuccess(true);
        setTimeout(() => {
          props.setIsLoading(false);
          props.setIsSuccess(false);
          props.navigate('/courses');
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

export default updateCourse;