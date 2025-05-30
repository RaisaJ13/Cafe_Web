import "./contact.css"
import { Link } from "react-router-dom"

export default function ContactUs() {
  return (
    <div> <h2>Contact Us</h2>
    <p> <h3>Do you have anyquestion or recommand for us? You review matter to us. Please feel free to comment and share you experience</h3></p>
    <div className='Container'>
      <form action="form">
       <div>
         <label htmlFor="text">Your Email</label>
         <input type="text" name="" id="" />
       </div>
       <div>
         <label htmlFor="text">Comment</label>
         <input type="text" name="" id="" />
       </div>
       <Link to="/home">
       <button>Submit</button>
       </Link>
      </form>
    </div>
    </div>
  )
}
