import { onAuthStateChanged } from 'firebase/auth';
import React ,{createContext, useEffect, useState} from 'react'
import { auth ,db} from '../auth/fire-base';
import { addDoc, collection ,getDocs,deleteDoc, doc } from 'firebase/firestore';
import { data } from '../data';


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

const addFav =(id)=>{

    const dataToAdd = data.filter(el=>el.product_id == id)
    console.log(dataToAdd,'qqqq')
    const colRef = collection(db,'favs')


    
    addDoc(colRef,{data:dataToAdd[0]})
    .then(doc=>{
        //getFavs
        favs.push({data:dataToAdd[0],id:doc.id})
        setFavs(favs)
    })
}


const deleteFav=(id)=>{
    console.log('delete')
    const dataToDelete = favs.filter(el=>el.data.product_id == id)
    const docRef = doc(db,'favs',dataToDelete[0].id)
    deleteDoc(docRef)
    .then(()=>{
        let newfilter = favs.filter(el=>el.data.product_id != id)
        setFavs(newfilter)
    })

}


    useEffect(()=>{

        getFav()

        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })

    },[])

return (
    <AuthContext.Provider value={{currentUser,
        favs,
        addFav,
        deleteFav
    
    
    }}>

{props.children}


    </AuthContext.Provider>
)




}

export default AuthContext;