import './Navbar.scss';
import logo from '../../assets/icons/pfizer.png';
import { Button, Tooltip } from '@mui/material';
import logout from '../../assets/icons/exit.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const logOutUser = () => {
        const isConfirmed = window.confirm('Are you sure want to logout?');
        if(isConfirmed) {
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
                    <Link to='/students'>
                        <Button data-testid='studentsBtn' type="submit" variant="contained" size="small" className='control-button'>Students</Button>
                    </Link>
                    <Link to='/courses'>
                        <Button data-testid='coursesBtn' type="submit" variant="contained" size="small" className='control-button'>Courses</Button>
                    </Link>
                    <Link to='/enrolments'>
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