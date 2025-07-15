'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full z-50">
      <div className='w-full h-[15vh] flex justify-between items-center px-4 max-w-[98%] md:max-w-[85%] m-auto'>
        <div>
          <Link href={"/"}>
            <Image src="/image/logo.png" alt='icon' width={200} height={200} className='w-[3.5rem] h-[3.5rem] md:w-[6.5rem] md:h-[6.5rem] shake-on-hover' />
          </Link>
        </div>
        <div className='hidden md:flex gap-[5rem] text-[#d5bea2] font-bold'>
          <Link href="/" className="hover:underline underline-offset-6 transition duration-200">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-6 transition duration-200">About</Link>
          <Link href="/projects" className="hover:underline underline-offset-6 transition duration-200">Projects</Link>
          <Link href="/contact" className="hover:underline underline-offset-6 transition duration-200">Contact</Link>
        </div>
        <div className="md:hidden flex items-center gap-6">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-[#000]">
            ☰
          </button>
        </div>
      </div>
        <div className={`md:hidden fixed top-5 right-0 h-1/2 w-2/5 bg-[#000] rounded-tl-2xl rounded-bl-2xl shadow-lg transform transition-all duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex flex-col items-start gap-6 text-[#d5bea2] font-bold text-lg">
                <button onClick={() => setMenuOpen(false)} className="text-xl font-bold self-end">✕</button>
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
