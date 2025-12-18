import { useState } from 'react'
import "./style/app.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import DropDown from './components/drop-down'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import FicheLogement from './pages/ficheLogement'




function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement/:id' element={<FicheLogement />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
