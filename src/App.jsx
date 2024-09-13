import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Currency/Coin.jsx'
import Info from './pages/Info/Info';
import About from './pages/About/About';
import Exchange from './pages/Exchange/Exchange';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';


// This is the main component that renders the application
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/info" element={<Info />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default App