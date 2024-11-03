import Home from "./components/Home.jsx"
import AdminDashboard from "./components/Admin.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from "react"
import Container from "./components/Container.jsx"
import Contact from "./components/Contact.jsx"
import AboutUs from "./components/AboutUs.jsx"
function App()
{
  const [userList, setUserList] = useState([{
    _id:"",
    userName: "Dave",
    password: "12345",
    emailId:"",
    confirmPassword:"",
    phoneNumber: "",
  },
]); 
  


  

  
  
  return(<div>
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/"></Route>
      <Route element={<AdminDashboard/>} path="/admin"></Route>
       <Route element={<Container/>}></Route>
       <Route element={<Contact/>} path="/contact"></Route>
       <Route element={<AboutUs/>} path="/aboutus"></Route>
       
      </Routes>
      </BrowserRouter>
  </div>)
}

export default App
