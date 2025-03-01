import AxiosClient from '../../../api/AxiosClient';
import { baseURL } from '../../../api/baseURL';
import { RegisterStudentFunctionProps } from '../../../types/functions.types';

const registerStudent = async (props: RegisterStudentFunctionProps) => {
    props.setIsLoading(true);
    try {
        await AxiosClient.post(`${baseURL}/auth/register-user`, props.user)
            .then((res) =>{
                console.log(res.data.data);
                props.setIsSuccess(true);
                setTimeout(() => {
                    props.setIsSuccess(false);
                }, 5000);
                setTimeout(() => {
                    props.navigate('/students');
                }, 5000);
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

export default registerStudent;