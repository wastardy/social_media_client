import './post.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useContext, useState } from 'react';
import moment from 'moment';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);

    // const liked = true; 

    const { isLoading, error, data = []} = useQuery(['likes', post.id], () => 
        makeRequest.get('/likes?postId=' + post.id).then(res => {
            return res.data;
        })
    );

    const queryClient = useQueryClient();
    
    const mutation = useMutation(
        (liked) => {
            if (liked) {
                return makeRequest.delete('/likes?postId='+ post.id);
            }
            
            return makeRequest.post('/likes', {postId: post.id})
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['likes']);
            },
        }
    );

    const deleteMutation = useMutation(
        (postId) => {
            return makeRequest.delete('/posts/' + postId);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['posts']);
            },
        }
    );

    const handleLike = () => {
        console.log(`Liked status: ${data.includes(currentUser.id)}`);
        
        mutation.mutate(data.includes(currentUser.id));
    }

    const handleDelete = () => {
        console.log(`Liked status: ${data.includes(currentUser.id)}`);
        
        deleteMutation.mutate(post.id);
    }

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="uInfo">
                        <img src={post.profile_picture} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.user_id}`} style={{textDecoration:"none", color:"inherit"}}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
                    { menuOpen 
                        && post.userId !== currentUser.id 
                        && (<button onClick={handleDelete}>delete</button>)
                    }
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    {/* src={post.img ? post.img : `./upload/${post.img}`} */}
                    <img src={post.img} /> 
                </div>
                <div className="info">
                    <div className="item">
                        {isLoading
                            ? 'loading'
                            : data.includes(currentUser.id)
                                ? (<FavoriteOutlinedIcon style={{color:'red'}} onClick={handleLike} />) 
                                : (<FavoriteBorderOutlinedIcon onClick={handleLike} />)
                        }
                        {data.length} Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        1 Comment
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>

                { commentOpen && <Comments postId={post.id}/> }
            </div>
        </div>
    );
}

export default Post;