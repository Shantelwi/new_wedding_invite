import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import RSVPForm from './components/RSVPForm';
import Location from './components/Location';
import About from './components/AboutUs';
import FAQ from './components/FAQs';
import './App.css';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className='relative'>
        <nav className='text-cursive p-5 flex justify-between items-center bg-white'>
          <div className='logo text-2xl md:hidden'> <button> <a href="/">R+S</a> </button> </div> {/* Logo only on small screens */}
          <div className='hidden md:flex md:justify-center md:items-center w-full'>
            {/* Navigation links for desktop */}
            <div className='flex space-x-8'>
              <Link to="/" className='nav-link text-4xl'>Home</Link>
              <Link to="/rsvp" className='nav-link text-4xl'>RSVP</Link>
              <Link to="/location" className='nav-link text-4xl'>Travel</Link>
              <Link to="/about" className='nav-link text-4xl'>Our Story</Link>
              <Link to="/faq" className='nav-link text-4xl'>FAQ's</Link>
            </div>
          </div>
          <div className='md:hidden' onClick={toggleMenu}>
            {/* Hamburger Icon */}
            <div className='flex flex-col cursor-pointer'>
              <div className='bg-black h-1 w-8 mb-1'></div>
              <div className='bg-black h-1 w-8 mb-1'></div>
              <div className='bg-black h-1 w-8'></div>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isOpen && (
          <div className='flex-col md:hidden bg-white p-5'>
            <Link to="/" className='nav-link text-2xl' onClick={closeMenu}>Home</Link>
            <Link to="/rsvp" className='nav-link text-2xl' onClick={closeMenu}>RSVP</Link>
            <Link to="/location" className='nav-link text-2xl' onClick={closeMenu}>Travel</Link>
            <Link to="/about" className='nav-link text-2xl' onClick={closeMenu}>Our Story</Link>
            <Link to="/faq" className='nav-link text-2xl' onClick={closeMenu}>FAQ's</Link>
          </div>
        )}
      </div>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rsvp' element={<RSVPForm />} />
        <Route path='/location' element={<Location />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;




