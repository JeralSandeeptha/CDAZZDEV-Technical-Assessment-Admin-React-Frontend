import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import LoginPage from '../pages/login-page/LoginPage';
import DashboardPage from '../pages/dashboard-page/DashboardPage';
import PublicRoute from './public-route/PublicRoute';
import PrivateRoute from './private-route/PrivateRoute';

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
        <Route path='*' Component={NotFoundPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;