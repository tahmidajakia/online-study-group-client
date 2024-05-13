import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../assets/Firebase/Firebase.config";
export const AuthContexts = createContext(null);
const googleProvider = new GoogleAuthProvider();


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

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
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
        signInWithGoogle,
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