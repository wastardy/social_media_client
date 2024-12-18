import Stories from '../../components/stories/Stories.jsx';
import Posts from '../../components/posts/Posts.jsx';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Stories/>
            <Posts/>
        </div>
    )
}

export default Home