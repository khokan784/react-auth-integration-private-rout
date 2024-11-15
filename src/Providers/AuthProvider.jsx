import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const twitterProvider = new TwitterAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }

    

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubcribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        twitterProvider,
        gitHubProvider,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;