import React, { useState } from 'react'
import { auth } from '../auth/fire-base'
import { createUserWithEmailAndPassword} from 'firebase/auth'

const Login = () => {

const [firstName ,setFirstName] =useState()
const [lastName ,setLastName] = useState()
const [email,setEmail] = useState()
const [password,setPassword] =useState()


const handleSubmit=(e)=>{
  e.preventDefault()

}



  return (
    <div>
      <div className='register'>
        <div className='form-image'>
          <img src={'https://picsum.photos/800/800'} alt='sample-movie'/>
        </div>
      </div >
      <div className='register-form'>
        <h1 className='form-title  display-3'> REGISTER</h1>
      

    <form  onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label for='first-name' className='for-label display-4'>First Name</label>
        <input type='text' className='form-control'  placeholder='enter name'
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        ></input>
      </div>
      <div className='mb-3'>
        <label for='last-name' className='for-label display-4'>Last Name</label>
        <input type='text' className='form-control'  placeholder='enter last name'
        onChange={(e)=>setLastName(e.target.value)}
        value={lastName}
        ></input>
      </div>
      <div className='mb-3'>
        <label for='email' className='for-label display-4'>Email</label>
        <input type='email' className='form-control'  placeholder='enter email'
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
        ></input>
      </div>
      <div className='mb-3'>
        <label for='passwort' className='for-label display-4'>Passwort</label>
        <input type='passwort' className='form-control'  placeholder='enter Passwort'
         onChange={(e)=>setPassword(e.target.value)}
         value={password}
        
        ></input>
      </div>

    <input type='submit' className='btn btn-primary form-control' value='register'/>

    </form>

    </div>

    </div>
  )
}

export default Login