import './App.css'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import { useState } from 'react'
import LoaderScreem from './components/utils/LoaderScreem.jsx'
<<<<<<< HEAD
import Footer from './components/footer/Footer'
import Page404 from './components/utils/Page404'
=======
import Footer from './footer/Footer'
>>>>>>> 4f552f37a6d897e386f8243fff78fee9d58d8c82

function App() {

  const [isLoading, setIsLoading] = useState(true)
  setTimeout(()=>{
    setIsLoading(false)
  },3000)
<<<<<<< HEAD

=======
>>>>>>> 4f552f37a6d897e386f8243fff78fee9d58d8c82
  return (
    <div className="App">
      {
        isLoading ? <LoaderScreem /> : (
          <div>
            <Header />
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
<<<<<<< HEAD
              <Route path='/*' element={<Page404 />} />
=======
>>>>>>> 4f552f37a6d897e386f8243fff78fee9d58d8c82
            </Routes>
            <Footer />
          </div>
        )
      }
    </div>
  )
}

export default App
