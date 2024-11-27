import './App.css'
import {Routes, Route} from "react-router-dom"
import Navbar from "../src/components/Navbar"
import Opportunities from './pages/Opportunities'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import Register from './pages/Register'
import AdminDash from "./pages/AdminDash";
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider  } from '../context/userContext'

axios.defaults.baseURL = 'http://localhost:8000/'; //backendURL
axios.defaults.withCredentials = true 


function App() {
  return(
    <UserContextProvider>
      <Navbar/>
      <Toaster position = 'top-right' toastOptions={{duration:4000}}/>
      {/* 4 seconds */}
      <Routes>
        <Route path = "/" element= {<Opportunities/>}/>
        <Route path = "/login" element= {<Login/>}/>
        <Route path = "/register" element= {<Register/>}/>
        <Route path = "/adminlogin" element= {<AdminLogin/>}/>
        <Route path = "/admindash" element= {<AdminDash/>}/>
      </Routes>
    </UserContextProvider>
  )
}


export default App
