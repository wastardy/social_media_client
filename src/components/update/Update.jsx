import { useState } from 'react';
import './update.scss';
import { makeRequest } from '../../axios';
import { useMutation, useQueryClient } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Update = ({ setOpenUpdate, user }) => {
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(null);
    const [texts, setTexts] = useState({
        email: user.email,
        password: user.password,
        name: user.name,
        city: user.city,
        website: user.website,
    });
    
    const upload = async (file) => {
        console.log(file)

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

    const handleChange = (event) => {
        setTexts((prev) => ({
            ...prev, 
            [event.target.name] : [event.target.value]
        }));
    }

    const queryClient = useQueryClient();
    
    const mutation = useMutation(
        (user) => 
        {
            return makeRequest.put("/users", user);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["user"]);
            },
        }
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        // -----> find a better way to get image URL

        let coverUrl;
        let profileUrl;
        
        coverUrl = cover ? await upload(cover) : user.cover_picture;
        profileUrl = profile ? await upload(profile) : user.profile_picture;

        mutation.mutate({ 
            ...texts, 
            cover_picture: coverUrl, 
            profile_picture: profileUrl 
        });
        
        setOpenUpdate(false);
        setCover(null);
        setProfile(null);
    };

    return (
        <div className='update'>
            <div className="wrapper">
                <h1>Update Your Profile</h1>
                <form>
                    <div className="files">
                        {/* Cover Image */}
                        <label htmlFor="cover">
                            <span>Cover Picture</span>
                            <div className="imgContainer">
                                <img
                                    src={cover 
                                            ? URL.createObjectURL(cover)
                                            : user.cover_picture
                                    }
                                    alt="cover picture"
                                />
                                <FontAwesomeIcon icon={faCloudUploadAlt} className="icon" />
                            </div>
                        </label>
                        <input 
                            type="file" 
                            id="cover"
                            style={{ display: "none" }}
                            onChange={(e) => setCoverPicture(e.target.files[0])} 
                        />

                        {/* Profile Image */}
                        <label htmlFor="profile">
                            <span>Profile Picture</span>
                            <div className="imgContainer">
                                <img
                                    src={profile
                                        ? URL.createObjectURL(profile)
                                        : user.profile_picture
                                    }
                                    alt=""
                                />
                                <FontAwesomeIcon icon={faCloudUploadAlt} className="icon" />
                            </div>
                        </label>
                        <input 
                            type="file" 
                            id="profile"
                            style={{ display: "none" }}
                            onChange={(e) => setProfilePicture(e.target.files[1])} 
                        />
                    </div>
                    
                    <label>Email</label>
                    <input 
                        type="text"
                        value={texts.email}
                        name="email"
                        onChange={handleChange} 
                    />

                    <label>Password</label>
                    <input 
                        type="text"
                        value={texts.password}
                        name="password"
                        onChange={handleChange} 
                    />

                    <label>Name</label>
                    <input 
                        type="text" 
                        value={texts.name}
                        name='name' 
                        onChange={handleChange} 
                    />

                    <label>Country / City</label>
                    <input 
                        type="text"
                        name="city"
                        value={texts.city}
                        onChange={handleChange} 
                    />

                    <label>Website</label>
                    <input 
                        type="text"
                        name="website"
                        value={texts.website}
                        onChange={handleChange} 
                    />
                    <div className="buttonContainer">
                        <button onClick={handleSubmit}>Update</button>
                    </div>
                </form>
                <button className="close" onClick={()=>setOpenUpdate(false)}>close</button>
            </div>
        </div>
    )
}

export default Update;