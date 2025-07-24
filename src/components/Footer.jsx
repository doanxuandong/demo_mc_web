import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="z-30 fixed bottom-0 left-0 w-full flex justify-between items-end px-12 pb-6">
      <div className="flex space-x-10 text-xs text-white font-semibold">
        <a href="#" className="hover:underline">PRIVACY STATEMENT</a>
        <a href="#" className="hover:underline">COOKIE NOTICE</a>
        <a href="#" className="hover:underline">TERMS & CONDITIONS</a>
        <a href="#" className="hover:underline">COMPLAINTS CHANNEL</a>
      </div>
      <div className="flex space-x-6 text-white text-2xl">
        <a href="#" className="hover:text-blue-200"><FaFacebookF /></a>
        <a href="#" className="hover:text-blue-200"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-200"><FaYoutube /></a>
        <a href="#" className="hover:text-blue-200"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-blue-200"><FaTelegramPlane /></a>
      </div>
    </footer>
  );
} 