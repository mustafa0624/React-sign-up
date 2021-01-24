import { createContext, useEffect, useState } from 'react';
import Firebase from "../firebase/firabase.utils"

export const FirebaseAuthContext = createContext();



function AuthContextProvider(props) {
    const [currentUser,setCurrentUser] = useState("")
    const [isAuth,setIsAuth] =useState(false)


    useEffect(()=>{
         Firebase.firebaseAuth.onAuthStateChanged((user)=>{
             setCurrentUser(user)

         })

    },[])
    


   

    return (
        <FirebaseAuthContext.Provider value={{currentUser}}>
            {props.children}
        </FirebaseAuthContext.Provider>
        
        
    )
}

export default AuthContextProvider