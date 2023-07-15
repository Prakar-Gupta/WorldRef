import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyB0Gz3bmial_Xz3h_VnTKP4Yif4dyvLt4s",
    authDomain: "worldref-b8a82.firebaseapp.com",
    projectId: "worldref-b8a82",
    storageBucket: "worldref-b8a82.appspot.com",
    messagingSenderId: "902062907134",
    appId: "1:902062907134:web:49ee8dd41ec42ca864cfaf",
    measurementId: "G-83MMRV659E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};