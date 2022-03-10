import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Favorit from './component/Favorit';
import Login from './component/Login';
import Main from './component/Main';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (

    <AuthContextProvider>
    <Router>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Favorit' element={<Favorit/>}/>
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
