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
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const userId = useLocation().pathname.split('/')[2];

    const { isLoading, error, data = []} = useQuery(['user'], () => 
        makeRequest.get('/users/find/' + userId).then(res => {
            return res.data;
        })
    );

    console.log(data);

    return (
        <div className='profile'>
            <div className="images">
                <img src={data.cover_picture} alt="" className="cover" />
                <img src={data.profile_picture} alt="" className="profile" />
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
                        <span>{data.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>{data.city}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>{data.website}</span>
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