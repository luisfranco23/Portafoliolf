import './App.css'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import { useState } from 'react'
import LoaderScreem from './components/utils/LoaderScreem.jsx'
import Footer from './footer/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(()=>{
    setIsLoading(false)
  },3000)
  return (
    <div className="App">
      {
        isLoading ? <LoaderScreem /> : (
          <div>
            <Header />
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
            <Footer />
          </div>
        )
      }
    </div>
  )
}

export default App
