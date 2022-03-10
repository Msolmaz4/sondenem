import React from 'react'
import Favorit from './Favorit'
import { Link } from 'react-router-dom'
import Main from './Main'
import Login from './Login'

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href={'/'}>LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=''>Home</a>
          <Link to={<Main/>}/>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href={<Favorit/>}>Favorites</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href=''>Cart</a>
          
        </li>
        <li className="nav-item">
        <a className="nav-link active" href=''>Login</a>
      
          <Link to={<Login/>}/>
            
         
        </li>
        <li className="nav-item">
          <a className="nav-link active" href={'/register'}>Register</a>
        </li>
      </ul>
    </div>
    </form>
  </div>
</nav>



    </div>
  )
}

export default Navbar