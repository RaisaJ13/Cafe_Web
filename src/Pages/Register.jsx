import "./Register.css"
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
        <div className='register-container' >
          <h1>Regitser</h1>
      <form action="form">
        <div>
          <label htmlFor="text">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="text">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="text">Password</label>
          <input type="text" />
        </div>
        <p>Have account?
          <Link to="/login"><u>Login</u></Link>
        </p>
        <Link to ="/login">
        <button>Submit</button>
        </Link>
      </form>
     </div> 
    </div>
    
  )
}
