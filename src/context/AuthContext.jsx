import React ,{createContext} from 'react'


const AuthContext = createContext();

export const AuthContextProvider =(props)=>{


return (
    <AuthContext.Provider>

{props.children}


    </AuthContext.Provider>
)




}

export default AuthContextProvider;