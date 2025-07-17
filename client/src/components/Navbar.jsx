import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-2 bg-slate-900 text-pink-800 font-sans'>
      <Link to="/" className='w-32 h-12 flex items-center border border-solid border-pink-800 hover:border-gray-300 rounded-2xl'>
        <img src={logo} alt="logo" />
      </Link>

      <div className='space-x-6 text-lg underline decoration-2'>
        <a href="#about" className="hover:text-gray-300 hidden md:inline" >About</a>
        <a href="#contact" className="hover:text-gray-300 hidden md:inline" >Contact</a>
        <Link to="/shitboard" className="hover:text-gray-300" >Shitboard</Link>
        <Link to="https://github.com/ElonMusk" target="_blank" rel="noreferrer" className="hover:text-gray-300" >Github</Link>
      </div>

    </div>
  )
}

export default Navbar