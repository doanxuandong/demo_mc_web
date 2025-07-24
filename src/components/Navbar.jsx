import React from 'react';
import logoMC from '../images/logomctrang.png';

export default function Navbar() {
  return (
    <nav className="z-30 fixed top-0 left-0 w-full flex justify-between items-center px-12 pt-8">
      <div className="flex items-center space-x-2">
        <img src={logoMC} alt="MC group logo" className="h-12 w-auto transition duration-300 hover:scale-125 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-10">
        <a href="#about" className="text-white font-semibold hover:underline">ABOUT</a>
        <a href="#whatwedo" className="text-white font-semibold hover:underline">WHAT WE DO</a>
        <a href="#creative" className="text-white font-semibold hover:underline">CREATIVE</a>
        <a href="#live" className="text-white font-semibold hover:underline">LIVE AT MCG</a>
        <a href="#contact" className="text-white font-semibold hover:underline">CONTACT</a>
        <button style={{ borderRadius: '5px' }} className="border border-white text-white px-4 py-1 font-semibold ml-4 hover:bg-white hover:text-blue-900 transition">EN</button>
      </div>
    </nav>
  );
} 