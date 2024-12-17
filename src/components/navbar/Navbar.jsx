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

const Navbar = () => {
    return(
        <div className='navbar'>

            {/* Left Side */}
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>connectify</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
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
                    <img src="https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg" alt="Tony Stark image" />
                    <span>Tony Stark</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;