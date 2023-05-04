import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = (email, password) => {
        return signOut(auth)
    }
    const handleGoogle=(GoogleProvider)=>{
       return signInWithPopup(auth,GoogleProvider)
    }
    const handleGithub=(GithubProvider)=>{
        return signInWithPopup(auth,GithubProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
        }));
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        handleGoogle,
        handleGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;