// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full relative top-0 left-0 z-10'>
      <header className='flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='flex items-center gap-2'>
          <img src="/logo.svg" alt="Site Logo" className="w-10 h-10 mr-2 xl:w-12 xl:h-12 xl:mr-4" />
          <h1 className='text-xl font-semibold'>Site Name</h1>
        </div>     
        <div onClick={() => setMenuOpen(!menuOpen)} className='md:hidden cursor-pointer'>
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
        <nav className={`absolute md:static bg-white w-full md:w-auto transition-all duration-500 ease-in ${menuOpen ? 'top-14' : 'top-[-490px]'} md:top-0 md:flex md:items-center md:pb-0 pb-12 md:space-x-8`}>
          <ul className='flex flex-col md:flex-row md:space-x-8 md:pb-0 px-4'>
          <li className='md:my-0 my-4 py-3 font-semibold'>
              <Link to="/post/20" className='text-black hover:text-indigo-400 duration-300 border-b-2 border-transparent hover:border-indigo-400'>About us</Link>
          </li>
            <li className='md:my-0 my-4 py-3 font-semibold'>
              <Link to="/post/15" className='text-black hover:text-indigo-400 duration-300 border-b-2 border-transparent hover:border-indigo-400'>Contact us</Link>
            </li>
            <li className='md:my-0 my-4 py-3 font-semibold'>
              <Link to="/post/10" className='text-black hover:text-indigo-400 duration-300 border-b-2 border-transparent hover:border-indigo-400'>Location</Link>
            </li>
            <li className='md:my-0 my-4 py-3 font-semibold'>
              <Link to="/" className='bg-black text-white px-5 py-2.5 rounded hover:bg-indigo-400 hover:text-white transition duration-300 '>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
