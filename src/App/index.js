//import logo from '../logo.svg';
import '../style.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Apropos from '../pages/Apropos'
import Logement from '../pages/Logement'
import Error from '../components/Error'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logement/:logId" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}
export default App