import { useContext, useState } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { makeRequest } from '../../axios';
import moment from 'moment';

const Comments = ({ postId }) => {

    const [desc, setDesc] = useState('');
    const { currentUser } = useContext(AuthContext);

    const { isLoading, error, data } = useQuery(['comments'], () => 
        makeRequest.get('/comments?postId=' + postId).then(res => {
            return res.data;
        })
    );
    
    const queryClient = useQueryClient();
    
    const mutation = useMutation(
        (newComment) => 
        {
            return makeRequest.post("/comments", newComment);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['comments']);
            },
        }
    );

    const handleClick = async (event) => {
        event.preventDefault();

        mutation.mutate({ desc, postId });
        
        setDesc("");
    };
    
    
    /* temp comments
    const comments = [
        {
            id: 1,
            desc: "Legendary vibes only 🏆",
            name: "future",
            userId: 1,
            profilePicture: "../src/assets/future.jpg",
        },
        {
            id: 2,
            desc: "Always pushing boundaries, respect 🙌",
            name: "21savage",
            userId: 2,
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldmjMdLd4pMRGn1acp_0t05t-AqSOyzCQMA&s",
        },
    ];*/

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profile_picture} alt="" />
                <input 
                    type="text" 
                    placeholder='write a comment..'
                    value={desc}
                    onChange={e=>setDesc(e.target.value)}    
                />
                <button onClick={handleClick}>Send</button>
            </div>
            {isLoading 
                ? 'loading..'
                : data.map((comment) => (
                <div className="comment">
                    <img src={comment.profile_picture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>{moment(comment.createdAt).fromNow()}</span>
                </div>
            ))}
        </div>
    );
}

export default Comments;