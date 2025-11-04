import { useState } from 'react'
import "./style/app.scss"
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import DropDown from './components/drop-down'



function App() {
  

  return (
    <main>
      <div className='page-content'>
        <Header />
        <Banner />
      </div>
      <Footer />
    </main>
  )
}

export default App
