import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkmodeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return(
        <div className='navbar'>

            {/* Left Side */}
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>connectify</span>
                </Link>
                <HomeOutlinedIcon/>
                { darkMode ? ( 
                    <WbSunnyOutlinedIcon onClick={ toggle } /> 
                    ) : (
                    <DarkModeOutlinedIcon onClick={ toggle }/>
                )}
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>

            {/* Right Side */}
            <div className="right">
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                    <img src={currentUser.profile_picture} alt="profile image" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;