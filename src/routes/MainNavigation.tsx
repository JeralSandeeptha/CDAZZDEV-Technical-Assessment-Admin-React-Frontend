import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import LoginPage from '../pages/login-page/LoginPage';
import DashboardPage from '../pages/dashboard-page/DashboardPage';
import PublicRoute from './public-route/PublicRoute';
import PrivateRoute from './private-route/PrivateRoute';
import ProfilePage from '../pages/profile-page/ProfilePage';
import StudentsPage from '../pages/students-page/StudentsPage';
import CoursesPage from '../pages/courses-page/CoursesPage';
import EnrollmnetsPage from '../pages/enrollments-page/EnrollmnetsPage';
import AddStudentPage from '../pages/add-student/AddStudentPage';
import UpdateStudentPage from '../pages/update-student/UpdateStudentPage';
import AddCourse from '../pages/add-course/AddCourse';
import UpdateCoursePage from '../pages/update-course/UpdateCoursePage';
import AddEnrollment from '../pages/add-enrollment/AddEnrollment';

const MainNavigation = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<PublicRoute element={<LoginPage />}/>}
        />
        <Route 
          path='/register' 
          element={<PublicRoute element={<RegisterPage />}/>}
        />
        <Route 
          path='/dashboard'   
          element={<PrivateRoute element={<DashboardPage />}/>}
        />
        <Route 
          path='/profile'   
          element={<PrivateRoute element={<ProfilePage />}/>}
        />
        <Route 
          path='/students'   
          element={<PrivateRoute element={<StudentsPage />}/>}
        />
        <Route 
          path='/courses'   
          element={<PrivateRoute element={<CoursesPage />}/>}
        />
        <Route 
          path='/enrollments'   
          element={<PrivateRoute element={<EnrollmnetsPage />}/>}
        />
        <Route 
          path='/add-student'   
          element={<PrivateRoute element={<AddStudentPage />}/>}
        />
        <Route 
          path='/update-student/:studentId'   
          element={<PrivateRoute element={<UpdateStudentPage />}/>}
        />
        <Route 
          path='/add-course'   
          element={<PrivateRoute element={<AddCourse />}/>}
        />
        <Route 
          path='/update-course/:courseId'   
          element={<PrivateRoute element={<UpdateCoursePage />}/>}
        />
        <Route 
          path='/add-enrollment'   
          element={<PrivateRoute element={<AddEnrollment />}/>}
        />
        <Route path='*' Component={NotFoundPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;