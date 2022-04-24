import React from 'react'
import { Route, Routes } from 'react-router'
import { FooterDefault } from '../Assets/Components/Footer/FooterDefault'
import { NavbarDefault } from '../Assets/Components/Navbar/NavbarDefault'
import { SignIn } from '../pages/SignIn'
export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={ <SignIn/>} />
        <Route path="/login" element={
<>
            <NavbarDefault/>

<SignIn/>
            <FooterDefault/>

</>} />
        
    </Routes>
  )
}
