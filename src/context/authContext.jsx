import {createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        // TO DO
        setCurrentUser({
            id: 1, 
            name: "Robert Downey Jr.", 
            profile_picture: "https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg", 
        });
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