import {createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        try {
            const res = await axios.post('http://localhost:8800/api/auth/login', inputs, {
                withCredentials: true
            });
    
            if (res.data) {
                setCurrentUser(res.data);
            }
            else {
                console.error('---> AuthContextProvider() Login response is empty or invalid');
            }
        }
        catch (error) {
            console.error('Login failed:', error.message);
            throw error;
        }
        
        // setCurrentUser({
        //     id: 1, 
        //     name: "Robert Downey Jr.", 
        //     profile_picture: "https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg", 
        // });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};