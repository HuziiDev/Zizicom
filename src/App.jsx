import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  let [counter, setCounter]= useState(15)
  const addValue = () => {
    
    setCounter(counter+1)
  }
  const removeValue = () => {
    
    setCounter(counter-1)
  }


  return (
    <>
    
    <Navbar/>2
    <Hero/>
    </>
  )
}

export default App
