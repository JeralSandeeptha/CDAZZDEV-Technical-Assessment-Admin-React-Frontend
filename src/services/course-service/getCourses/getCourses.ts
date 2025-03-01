import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetAllCouresFunctionProps } from "../../../types/functions.types";

const getCourses = async (props: GetAllCouresFunctionProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/course`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setCourses(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getCourses;