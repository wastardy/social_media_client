import './leftBar.scss';
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Fund from "../../assets/13.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserFriends, 
    faUsers, 
    faStore, 
    faTv, 
    faClock, 
    faCalendarAlt, 
    faGamepad, 
    faImage, 
    faVideo, 
    faEnvelope, 
    faHandHoldingUsd, 
    faBook, 
    faGraduationCap 
} from '@fortawesome/free-solid-svg-icons';


const LeftBar = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profile_picture} alt="Tony Stark image" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faUserFriends} className="fa-icon"/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        {/* <img src={Groups} alt="" /> */}
                        <FontAwesomeIcon icon={faUsers} className="fa-icon"/>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        {/* <img src={Market} alt="" /> */}
                        <FontAwesomeIcon icon={faStore} className="fa-icon" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        {/* <img src={Watch} alt="" /> */}
                        <FontAwesomeIcon icon={faTv} className="fa-icon"/>
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        {/* <img src={Memories} alt="" /> */}
                        <FontAwesomeIcon icon={faClock} className="fa-icon"/>
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        {/* <img src={Events} alt="" /> */}
                        <FontAwesomeIcon icon={faCalendarAlt} className="fa-icon"/>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        {/* <img src={Gaming} alt="" /> */}
                        <FontAwesomeIcon icon={faGamepad} className="fa-icon"/>
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        {/* <img src={Gallery} alt="" /> */}
                        <FontAwesomeIcon icon={faImage} className="fa-icon"/>
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        {/* <img src={Videos} alt="" /> */}
                        <FontAwesomeIcon icon={faVideo} className="fa-icon"/>
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        {/* <img src={Messages} alt="" /> */}
                        <FontAwesomeIcon icon={faEnvelope} className="fa-icon"/>
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        {/* <img src={Fund} alt="" /> */}
                        <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-icon"/>
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        {/* <img src={Tutorials} alt="" /> */}
                        <FontAwesomeIcon icon={faBook} className="fa-icon"/>
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        {/* <img src={Courses} alt="" /> */}
                        <FontAwesomeIcon icon={faGraduationCap} className="fa-icon"/>
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;