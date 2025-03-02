import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetEnrollmentsFunctionProps } from "../../../types/functions.types";

const getEnrollments = async (props: GetEnrollmentsFunctionProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/enrollment`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setEnrollments(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getEnrollments;