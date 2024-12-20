import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {

    const { currentUser } = useContext(AuthContext);

    const comments = [
        {
            id: 1,
            desc: "Legendary vibes only 🏆",
            name: "future",
            userId: 1,
            profilePicture: "./src/assets/future.jpg",
        },
        {
            id: 2,
            desc: "Always pushing boundaries, respect 🙌",
            name: "21savage",
            userId: 2,
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldmjMdLd4pMRGn1acp_0t05t-AqSOyzCQMA&s",
        },
    ];

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profile_picture} alt="" />
                <input type="text" placeholder='write a comment..'/>
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
        </div>
    );
}

export default Comments;