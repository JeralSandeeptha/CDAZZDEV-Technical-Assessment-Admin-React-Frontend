import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import OverviewCard from "../../components/overview-card/OverviewCard";
import PageHeader from "../../components/page-header/PageHeader";
import "./DashboardPage.scss";
import { ICourse, IEnrollment, IUser } from "../../types/interfaces.types";
import useAuthContext from "../../hooks/useAuthContext";
import getCourses from "../../services/course-service/getCourses/getCourses";
import getStudents from "../../services/student-service/getStudents/getStudents";
import getEnrollments from "../../services/enrollment-service/getEnrollments/getEnrollments";

const DashboardPage = () => {

  const [students, setStudents] = useState<IUser[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [enrollments, setEnrollments] = useState<IEnrollment[]>([]);
  const {token} = useAuthContext();

  useEffect(() => {
    getCourses({
      setCourses: setCourses,
      token: token
    });
    getStudents({
      setStudents: setStudents,
      token: token
    });
    getEnrollments({
      setEnrollments: setEnrollments,
      token: token
    });
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader
        description="Overview of the Online Learning Platform"
        title="Admin Dashboard"
      />

      <div className="overview-dashboard">
        <div className="overview-dashboard-inner">
          <OverviewCard
            count={students.length}
            description="Access and Manage Students Data"
            image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723899461/megaphone-dynamic-premium_1_rlxjfb.png"
            title="Students"
          />
          <OverviewCard
            count={courses.length}
            description="Manage Courses Data"
            image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723986300/sheild-dynamic-premium_1_rxioh4.png"
            title="Courses"
          />
          <OverviewCard
            count={enrollments.length}
            description="Manage Enrollments Data"
            image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723986303/calender-dynamic-premium_zfxnpp.png"
            title="Enrollments"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
