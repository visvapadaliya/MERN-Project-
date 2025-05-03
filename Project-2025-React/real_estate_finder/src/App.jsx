import { useEffect, useState } from 'react'



// import './assets/adminlte.css'
// import './assets/adminlte.min.css'
// import './assets/all.min.css'
import './assets/style.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { Login } from './components/common/Login'
import { Signup } from './components/common/Signup'



import axios from 'axios'
import { AddProperty } from './components/agent/AddProperty'


import PrivateRoutes from './hooks/PrivateRoutes'

import { UpdateProperty } from './components/agent/UpdateProperty'
import Home from './components/common/Home'
import { ViewProperty } from './components/agent/ViewProperty'
import { AdminNavbar } from './components/layouts/AdminNavbar'
import { UserNavbar } from './components/layouts/UserNavbar'
import { Property } from './components/user/Property'
import { Agents } from './components/user/Agents'
import { ContactUs } from './components/user/ContactUs'
import { PropertyInfo } from './components/user/PropertyInfo'
import { Inquiry } from './components/user/Inquiry'
import { Admindashbord } from './components/agent/Admindashbord'
import ManageUser from './components/agent/ManageUser'



function App() {
  axios.defaults.baseURL = "http://localhost:3030"

  const location=useLocation();

  useEffect(()=>{
    if(location.pathname==="/login" || location.pathname === "/signup"){
      document.body.className="body";
    }else{
      document.body.className= "fh5co-wrapper";
    }
  },[location.pathname]);

  return (
    
     <div
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? ""
          : "fh5co-wrapper"
      }
    >
   
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        
        <Route path='' element={<PrivateRoutes/>}>
              <Route path='/user' element={<UserNavbar/>}>
              <Route path='profile' element={<UserProfile/>}></Route>
              <Route path='searchproperty/:categoryId' element={<Property/>}></Route>
              <Route path='showproperty/:id' element={<PropertyInfo/>}></Route>
              <Route path='agent' element={<Agents/>}></Route>
              <Route path='contactus' element={<ContactUs/>}></Route>
              <Route path='inquiry/:id' element={<Inquiry/>}></Route>
              </Route>
       
              
        
              <Route path='/admin' element={<AdminNavbar/>}>
              <Route path='property' element={<AddProperty/>}></Route>
                    <Route path='dashbord' element={<Admindashbord/>}></Route>
                    <Route path='manageuser' element={<ManageUser/>}></Route>
                    <Route path='viewproperty' element={<ViewProperty/>}></Route>
                    <Route path='updateproperty/:id' element={<UpdateProperty/>}></Route>
                    
             </Route>
        </Route>
        
                      
              
        </Routes>
      </div>

  )
}

export default App
