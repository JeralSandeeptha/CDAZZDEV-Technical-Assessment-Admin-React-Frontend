import './Navbar.scss';
import logo from '../../assets/icons/pfizer.png';
import { Button, Tooltip } from '@mui/material';
import logout from '../../assets/icons/exit.png';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import useAuthContext from '../../hooks/useAuthContext';
import logoutUser from '../../services/admin-service/logoutAdmin/logoutAdmin';

const Navbar = () => {

    const { clearLocalStorageItem } = useLocalStorage();
    const { setToken } = useAuthContext();
    const navigate = useNavigate();

    const logOutUser = () => {
        const isConfirmed = window.confirm('Are you sure want to logout?');
        if(isConfirmed) {
            logoutUser();
            clearLocalStorageItem('user');
            clearLocalStorageItem('accessToken');
            setToken(null);
            navigate('/');
        }
    }

    return (
        <div className='navbar' data-testid="navbar">
            <div className="navbar-inner">
                <div className="logo-content">
                    <img src={logo} alt="logo" className="logo" data-testid='logo'/>
                </div>
                <div className='auth-btns'>
                    <Link to='/dashboard'>
                        <Button data-testid='dashboardBtn' type="submit" variant="contained" size="small" className='control-button'>Dashboard</Button>
                    </Link>
                    <Link to='/students'>
                        <Button data-testid='studentsBtn' type="submit" variant="contained" size="small" className='control-button'>Students</Button>
                    </Link>
                    <Link to='/courses'>
                        <Button data-testid='coursesBtn' type="submit" variant="contained" size="small" className='control-button'>Courses</Button>
                    </Link>
                    <Link to='/enrollments'>
                        <Button data-testid='enrolmentsBtn' type="submit" variant="contained" size="small" className='control-button'>Enrolments</Button>
                    </Link>
                    <Tooltip title="Logout" data-testid='tooltip-logout'>
                        <div className="icon-container" onClick={logOutUser}>
                            <img src={logout} alt="logout-icon" className="icon" data-testid='logout'/>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );

}

export default Navbar;