import { useEffect, useState } from 'react';
import StudentsList from '../students-list/StudentsList';
import './StudentContent.scss';
import { IUser } from '../../types/interfaces.types';
import getStudents from '../../services/student-service/getStudents/getStudents';
import useAuthContext from '../../hooks/useAuthContext';

const StudentContent = () => {

    const [students, setStudents] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { token } = useAuthContext();

    const getAllUsers = () => {
        getStudents({
            setStudents: setStudents,
            token: token
        });
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <StudentsList 
            students={students}
            setStudents={setStudents}
            getStudents={getStudents}
            setIsError={setIsError}
            setIsLoading={setIsLoading}
            setIsSuccess={setIsSuccess}
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
        />
    );

}

export default StudentContent;
