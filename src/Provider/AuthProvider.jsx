import { createContext } from "react";
import { useState, useEffect } from "react";
import app from "../Firebase/firebaseAuth";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
        })
        return() => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;