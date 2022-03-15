import { onAuthStateChanged } from 'firebase/auth';
import React ,{createContext, useEffect, useState} from 'react'
import { auth ,db} from '../auth/fire-base';
import { collection ,getDocs} from 'firebase/firestore';


const AuthContext = createContext();

export const AuthContextProvider =(props)=>{

    const [currentUser,setCurrentUser] = useState()
    const [favs ,setFavs] = useState([])




const getFav = async ()=>{
        let favs=[]
        const colRef = collection(db,'favs')
        const favSchanpt = await getDocs(colRef)
        console.log(favSchanpt)


        favSchanpt.docs.forEach((doc)=>{
            favs.push({...doc.data(), id:doc.id})
        })
        setFavs(favs)
}

    useEffect(()=>{

        getFav()

        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })

    },[])

return (
    <AuthContext.Provider value={{currentUser,
        favs
    
    
    }}>

{props.children}


    </AuthContext.Provider>
)




}

export default AuthContext;