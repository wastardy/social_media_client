import './post.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';
import moment from 'moment';

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false);

    // temp
    const liked = false; 

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="uInfo">
                        <img src={post.profile_picture} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img ? post.img : `./upload/${post.img}`} alt="post image" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? (
                            <FavoriteOutlinedIcon/>
                            ) : (
                            <FavoriteBorderOutlinedIcon/>
                        )}
                        172M Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        4M Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>

                { commentOpen && <Comments/> }
            </div>
        </div>
    );
}

export default Post;