import { useContext } from 'react';
import { AuthContext } from '../../context/authContext'
import './stories.scss'

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "stephencurry30",
            img: "./src/assets/steph_story.jpg",
        },
        {
            id: 2,
            name: "cillianmurphyofficiall",
            img: "./src/assets/cillian_story.jpg",
        },
        {
            id: 3,
            name: "champagnepapi",
            img: "./src/assets/drake_story.jpg",
        },
        {
            id: 4,
            name: "future",
            img: "./src/assets/future_story.png",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profile_picture} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map((story) => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Stories;