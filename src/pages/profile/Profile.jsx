import './profile.scss';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts'

const Profile = () => {
    return (
        <div className='profile'>
            <div className="images">
                <img src="../src/assets/drake_bg_2.jpg" alt="" className="cover" />
                <img src="../src/assets/drake.jpg" alt="" className="profile" />
            </div>
            <div className="profileContainer">
                <div className="userInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize="large"/>
                        </a>
                        <a href="http://instagram.com">
                            <InstagramIcon fontSize="large"/>
                        </a>
                        <a href="http://linkedin.com">
                            <LinkedInIcon fontSize="large"/>
                        </a>
                        <a href="http://pinterest.com">
                            <PinterestIcon fontSize="large"/>
                        </a>
                    </div>
                    <div className="center">
                        <span>champagnepapi</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>Kanada, Toronto</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>Nocta</span>
                            </div>
                        </div>
                        <div className="button">
                            <button>follow</button>
                        </div>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts/>
            </div>
            
        </div>
    )
}

export default Profile