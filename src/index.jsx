import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Error from './pages/Error/Error'
import House from './pages/House/House'
import './index.scss'


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <div className='mainContainer'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/:id" element={<House />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    <Footer/>
    </div>
  </React.StrictMode>,
)
