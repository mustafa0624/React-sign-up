import { createContext, useEffect, useState } from 'react';
import Firebase from "../firebase/firabase.utils"

const FirebaseAuthContext = createContext()

export default function AuthContext(props) {
    // const [isAuth, setIsAuth] = useState(false)
    const [currentUser, setCurrentUser] = useState()


    useEffect(() => {
        Firebase.firebaseAuth.onAuthStateChanged((user) => {
            console.log("user", user)
            setCurrentUser(user)
        })
    }, [])

    return (
        <FirebaseAuthContext.Provider value={{ currentUser }}>
            {props.childeren}
        </FirebaseAuthContext.Provider>
    )
}
