import AxiosClient from '../../../api/AxiosClient';
import { baseURL } from '../../../api/baseURL';
import { AddCourseFunctionProps } from '../../../types/functions.types';

const addCourse = async (props: AddCourseFunctionProps) => {
    props.setIsLoading(true);
    try {
        await AxiosClient.post(`${baseURL}/course`, props.course, {
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
                    props.navigate('/courses');
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

export default addCourse;