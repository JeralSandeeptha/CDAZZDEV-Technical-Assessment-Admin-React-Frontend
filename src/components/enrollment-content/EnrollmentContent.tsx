import { useEffect, useState } from 'react';
import EnrollmentList from '../enrollment-list/EnrollmentList';
import './EnrollmentContent.scss';
import useAuthContext from '../../hooks/useAuthContext';
import { IEnrollment } from '../../types/interfaces.types';
import getEnrollments from '../../services/enrollment-service/getEnrollments/getEnrollments';

const EnrollmentContent = () => {

  const [enrollments, setEnrollments] = useState<IEnrollment[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { token } = useAuthContext();

    const getAllEnrollments = () => {
        getEnrollments({
        setEnrollments: setEnrollments,
          token: token
        });
    }

    useEffect(() => {
        getAllEnrollments();
    }, []);

  return (
    <EnrollmentList 
      enrollments={enrollments}
      getEnrollments={getEnrollments}
      isError={isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
      setEnrollments={setEnrollments}
      setIsError={setIsError}
      setIsLoading={setIsLoading}
      setIsSuccess={setIsSuccess}
    />
  );

}

export default EnrollmentContent;