import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../auth/fire-base'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
    const [email,setEmail] = useState()
    const [ password,setPassword ] = useState()
    const navi = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth,email,password)
            navi('/')
            
        } catch (error) {
            alert(error)
            
        }

    }



  return (
    <div>
        
        
        <div className='register'>
        <div className='form-image'>
          <img src={'https://picsum.photos/800/800'} alt='sample-movie'/>
        </div>
      </div >
      <div className='register-form'>
        <h1 className='form-title  display-3'> login</h1>
        <form id='login' 
        onSubmit={(e)=>handleSubmit(e)}
        >
      <div className='mb-3'>
        <label for='email' className='for-label display-4'>Email</label>
        <input type='email' className='form-control'  placeholder='enter email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        ></input>
        </div>
         <div className='mb-3'>
        <label for='password' className='for-label display-4'>PASSWORD</label>
        <input type='password' className='form-control'  placeholder='enter password'
         onChange={(e)=>setPassword(e.target.value)}
         value={password}
        ></input> </div>

<input type='submit' className='btn btn-primary form-control' value='register'/>


</form>

        </div>
        
        
        
        
        
        </div>
  )
}


export default Login;
