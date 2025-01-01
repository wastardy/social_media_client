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
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Profile = () => {
    const { currentUser } = useContext(AuthContext);

    const userId = parseInt(useLocation().pathname.split('/')[2]);

    const { isLoading, error, data = []} = useQuery(['user'], () => 
        makeRequest.get('/users/find/' + userId).then(res => {
            return res.data;
        })
    );

    const { isLoading: relationshipIsLoading, data: relationshipData } = useQuery(['relationship'], () => 
        makeRequest.get('/relationships?followedUserId=' + userId).then(res => {
            return res.data;
        })
    );

    const queryClient = useQueryClient();
    
    const mutation = useMutation(
        (following) => {
            if (following) {
                return makeRequest.delete('/relationships?userId='+ userId);
            }
            
            return makeRequest.post('/relationships', { userId })
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['relationship']);
            },
        }
    );

    const handleFollow = () => {
        console.log(`Following status: ${relationshipData.includes(currentUser.id)}`);
        
        mutation.mutate(relationshipData.includes(currentUser.id));
    }

    return (
        <div className='profile'>
            {isLoading 
                ? 'loading..' 
                : <><div className="images">
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
                                {relationshipIsLoading 
                                    ? 'loading..'
                                    : userId === currentUser.id 
                                        ? (<button>update</button>) 
                                        : (<button onClick={handleFollow}>{
                                                relationshipData.includes(currentUser.id)
                                                ? 'Following'
                                                : 'Follow'
                                            }</button>
                                        )   
                                }
                            </div>
                        </div>
                        <div className="right">
                            <EmailOutlinedIcon/>
                            <MoreVertIcon/>
                        </div>
                    </div>
                    <Posts userId={userId}/>
                </div></>
            }
        </div>
    )
}

export default Profile