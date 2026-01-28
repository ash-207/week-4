import React from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './page/Home'
import Truck from './page/Truck'
import Signup from './auth/Signup'
import Login from './auth/Login'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route   path="/"   element={<Home/>}  />
      <Route   path="/truck"   element={<Truck/>}  />
      <Route   path="/signup"   element={<Signup/>}  />
      <Route   path="/login"   element={<Login/>}  />
    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App