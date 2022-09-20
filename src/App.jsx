import './App.css'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import { useState } from 'react'
import LoaderScreem from './components/utils/LoaderScreem.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      <LoaderScreem />
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='loader' element={<LoaderScreem />} />
      </Routes>
    </div>
  )
}

export default App
