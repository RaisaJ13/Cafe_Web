import { Routes , Route} from 'react'
import HomePage from '../Pages/HomePage'
import AboutUS from '../Pages/AboutUS'
import ContactUs from '../Pages/ContactUs'
import Login from '../Pages/Login'

export default function AppRoute() {
  return (
   <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutUS />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   
  )
}
