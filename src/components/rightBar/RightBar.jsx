import './rightBar.scss';

const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/user.png" alt="" />
                            <span>wastardy</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/steph_curry.jpg" alt="" />
                            <span>stephencurry30</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/steph_curry.jpg" alt="" />
                            <p>
                                <span>stephencurry30</span> change his cover picture
                            </p>
                        </div>
                        <div className="time" style={{fontSize: "14px"}}>
                            1 min ago
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/kendrick_lamar.jpeg" alt="" />
                            <p>
                                <span>kendricklamar </span>
                                replies to a comment
                                <span> champagnepapi</span> 
                            </p>
                        </div>
                        <div className="time" style={{fontSize: "14px"}}>
                            7 mins ago
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/future.jpg" alt="" />
                            <p>
                                <span>future</span> post new video
                            </p>
                        </div>
                        <div className="time" style={{fontSize: "14px"}}>
                            18 mins ago
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/drake.jpg" alt="" />
                            <p>
                                <span>champagnepapi </span> 
                                comment user 
                                <span> kendricklamar</span>
                            </p>
                        </div>
                        <div className="time" style={{fontSize: "14px"}}>
                            32 mins ago
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Your Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/steph_curry.jpg" alt="" />
                            <div className="online"></div>
                            <span>stephencurry30</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/drake.jpg" alt="" />
                            <div className="online"></div>
                            <span>champagnepapi</span> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/future.jpg" alt="" />
                            <div className="offline"></div>
                            <span>future</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/ryan_holiday.jpg" alt="" />
                            <div className="online"></div>
                            <span>ryanholiday</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="src/assets/kendrick_lamar.jpeg" alt="" />
                            <div className="offline"></div>
                            <span>kendricklamar</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar;