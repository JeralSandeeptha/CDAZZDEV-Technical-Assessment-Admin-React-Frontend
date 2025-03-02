import AxiosClient from '../../../api/AxiosClient';
import { baseURL } from '../../../api/baseURL';
import { AddEnrollmentFunctionProps } from '../../../types/functions.types';

const createEnrollment = async (props: AddEnrollmentFunctionProps) => {
    props.setIsLoading(true);
    try {
        await AxiosClient.post(`${baseURL}/enrollment`, props.enrollment, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
            .then((res) =>{
                console.log(res.data.data);
                props.setIsSuccess(true);
                setTimeout(() => {
                    props.setIsSuccess(false);
                }, 5000);
                setTimeout(() => {
                    props.navigate('/enrollments');
                }, 7000);
            })
            .catch((error) => {
                console.error(error);
                props.setIsLoading(false);
                props.setIsError(true);
                setTimeout(() => {
                    props.setIsError(false);
                }, 5000);
            })
    } catch (error) {
        console.error(error);
        props.setIsLoading(false);
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
        }, 5000);
    }
}

export default createEnrollment;