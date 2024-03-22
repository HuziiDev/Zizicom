import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Heading from "./components/Heading"
import HireUs from "./components/HireUs"
import OurServices from "./components/OurServices"
import Foooter from './components/Foooter'



function App() {
 


  return (
    <>
    
    <Navbar/>
    <Hero/>
    <Heading/>
    <Services/>
    <OurServices/>
    <HireUs/>
  
    <Foooter/>
    
   
  </>
  )
}

export default App
