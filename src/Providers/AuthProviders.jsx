import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../assets/Firebase/Firebase.config";

export const AuthContexts = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();

        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProviders;