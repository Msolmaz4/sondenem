import { onAuthStateChanged } from 'firebase/auth';
import React ,{createContext, useEffect, useState} from 'react'
import { auth } from '../auth/fire-base';


const AuthContext = createContext();

export const AuthContextProvider =(props)=>{

    const [currentUser,setCurrentUser] = useState()



    useEffect(()=>{

        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })

    },[])

return (
    <AuthContext.Provider value={{currentUser}}>

{props.children}


    </AuthContext.Provider>
)




}

export default AuthContext;