import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetSingleCourseFunctionProps } from "../../../types/functions.types";

const getCourse = async (props: GetSingleCourseFunctionProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/course/${props.courseId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setCourse(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getCourse;