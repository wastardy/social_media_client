import './posts.scss';
import Post from '../../components/post/Post';
import { useQuery } from 'react-query'
import { makeRequest } from '../../axios';


const Posts = ({userId}) => {

    const { isLoading, error, data } = useQuery(['posts'], () => 
        makeRequest.get('/posts?userId=' + userId).then(res => {
            return res.data;
        })
    );

    /* temp posts
    const posts = [
        {
            id: 1,
            name: "champagnepapi",
            userId: 1,
            profilePic: "../src/assets/drake.jpg",
            desc: "From it's all blur tour",
            img: "../src/assets/drake_post.png",
        },
        {
            id: 2,
            name: "ryanholiday",
            userId: 2,
            profilePic: "../src/assets/ryan_holiday.jpg",
            desc: "Your potential, the absolute best you’re capable of—that’s tposthe metric to measure yourself against. Your standards are. Winning is not enough. People can get lucky and win. People can be assholes and win. Anyone can win. But not everyone is the best possible version of themselves.",
        },
        {
            id: 3,
            name: "cillianmurphyofficiall",
            userId: 2,
            profilePic: "../src/assets/cillian_murphy.png",
            desc: "I'm kind of a little in shock",
            img: "../src/assets/cillian_murphy_post.jpg",
        },
    ];
    */

    return (
        <div className="posts">
            {error 
                ? '---> smth went wrong at Posts.jsx' 
                : (isLoading ? 'loading' : data.map(post => (
                    <Post post={post} key={post.id}/>
                )))
            }
        </div>
    );
}

export default Posts;