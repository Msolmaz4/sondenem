import React, { useContext } from 'react'


import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../auth/fire-base'

const Navbar = () => {

const { currentUser } = useContext(AuthContext)

const navi=useNavigate()

const handlogOut =()=>{
signOut(auth)
navi('/')
}

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a  href="#">LOgo</a>
    <form className="d-flex">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <a onClick={()=>navi('/')} href="#">Home</a>

        <a className='nav-links'  onClick={()=>navi('/Favorit')} href="#">Favorit</a>

        <a className='nav-links' href="#">Card</a>

        {
          currentUser ?
         (
            <>

          <li>
            <a className='nav-links'>{currentUser.displayName} </a>
          </li>
          <li>
            <a className='nav-links' onClick={handlogOut}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
</a>
          </li>
          </>):
          (<>
            
          <a onClick={()=>navi('/login')} href="#">Login</a>

          <a onClick={()=>navi('/Signup')} href='#'>Register</a>
</>)
          
        }

      
      </div>
      
    </div>
    </form>
  </div>
</nav>



    </div>
  )
}

export default Navbar