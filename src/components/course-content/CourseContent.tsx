import { useEffect, useState } from "react";
import { ICourse } from "../../types/interfaces.types";
import "./CourseContent.scss";
import useAuthContext from "../../hooks/useAuthContext";
import CourseList from "../course-list/CourseList";
import getCourses from "../../services/course-service/getCourses/getCourses";

const CourseContent = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { token } = useAuthContext();

  const getAllCoureses = () => {
    getCourses({
      token: token,
      setCourses: setCourses
    });
  };

  useEffect(() => {
    getAllCoureses();
  }, []);

  return <CourseList 
    getCourses={getCourses}
    isError={isError}
    isLoading={isLoading}
    isSuccess={isSuccess}
    setCourses={setCourses}
    setIsError={setIsError}
    setIsLoading={setIsLoading}
    courses={courses}
    setIsSuccess={setIsSuccess}
  />
};

export default CourseContent;
