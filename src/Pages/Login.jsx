import "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div >
     <div className='login-container' >
      <h1>Login</h1>
      <form action="form">
        <div>
          <label htmlFor="text">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="text">Password</label>
          <input type="text" />
        </div>
        <p>Don't have account?
          <Link to="/register"><u>Register</u></Link>
        </p>
        <Link to ="/">
        <button>Submit</button>
        </Link>
      </form>
     </div>     
    </div>
  )
}
