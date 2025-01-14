import "./share.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMapMarkerAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios.js";

const Share = () => {
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");

    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    const upload = async () => {
        try {
            const formData = new FormData();

            formData.append('file', file);

            const res = await makeRequest.post("/upload", formData);

            return res.data;
        } 
        catch (error) {
            console.log(error.message);
        }
    };

    const mutation = useMutation(
        (newPost) => 
        {
            return makeRequest.post("/posts", newPost);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["posts"]);
            },
        }
    );

    const handleClick = async (event) => {
        event.preventDefault();

        let imgUrl = '';
        
        if (file) {
            imgUrl = await upload();
        }

        mutation.mutate({ desc, img: imgUrl });
        
        setDesc("");
        setFile(null);
    };

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <img src={currentUser.profile_picture} alt="profile image" />
                        <input
                            type="text"
                            placeholder={`Any news to share, ${currentUser.name}?`}
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                        />
                    </div>
                    <div className="right">
                        {file && (
                            <img 
                                className="file" 
                                alt="uploading image" 
                                src={URL.createObjectURL(file)} />
                        )}
                    </div>
                </div>
                <hr />

                <div className="bottom">  
                    <div className="left">
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <label htmlFor="file">
                            <div className="item">
                                <FontAwesomeIcon icon={faImage} className="icon" />
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <FontAwesomeIcon icon={faUserFriends} className="icon" />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={handleClick}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;