import { Link} from 'react-router-dom'
import AppRoute from './Routes/AppRoute'
import './App.css'

function App() {

  return (
    <>
      <AppRoute />
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
      </div>
      
    </>
  )
}

export default App
