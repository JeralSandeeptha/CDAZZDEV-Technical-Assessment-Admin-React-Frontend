import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetStudentsFunctionProps } from "../../../types/functions.types";

const getStudents = async (props: GetStudentsFunctionProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/student`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setStudents(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getStudents;