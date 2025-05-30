import { Link ,Route,Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutUS from './Pages/AboutUS'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { useEffect, useState } from 'react'


function App() {
  const [darkMood,setDarkMood]= useState(false)
  useEffect(()=>{
    document.body.className = darkMood? 'dark': 'light'
},[darkMood])

  const toggolMood=()=>{
    setDarkMood(prevMood=> !prevMood)
  }

  return (
    <>
      
      <div className='navbar'>
        <h1>
          <a href="#"></a>Cafe
        </h1>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
        <Link to="/login">
          <button className='login-btn'>Login</button>
        </Link>
        <button onClick={toggolMood} className='btn-mood'>Mood</button>
      </div>
      <>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </>
  )
}

export default App
