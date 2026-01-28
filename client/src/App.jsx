import React from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './page/Home'
import Truck from './page/Truck'
import Signup from './auth/Signup'
import Login from './auth/Login'
<<<<<<< HEAD
=======
import Admin from './auth/Admin'
>>>>>>> upstream/main
import Use from './auth/Use'
function App() {
  console.log(" fruit : 🍑");
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route   path="/"   element={<Home/>}  />
      <Route   path="/truck"   element={<Truck/>}  />
      <Route   path="/signup"   element={<Signup/>}  />
      <Route   path="/login"   element={<Login/>}  />
<<<<<<< HEAD
      <Route   path="/use"   element={<Use/>}  />
=======
      <Route   path="/admin"   element={<Admin/>}  />
      <Route   path="/u"   element={<Use/>}  />
>>>>>>> upstream/main
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App