import './post.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>3 mins ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;