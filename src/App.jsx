import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hompage from './Parts/Home_page'
import Navbar from './Parts/Navbar'
import Game_page from "./Parts/Game_page";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game_page />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
