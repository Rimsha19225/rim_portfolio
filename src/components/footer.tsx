'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black md:bg-[#d5bea2] text-[#ffe4c4] md:text-[#000] border-t border-dashed ">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl tracking-widest font-extrabold text-[#ffe4c4] md:text-[#000] mb-3">Rimsha Arshad</h2>
          <p className="text-[0.8rem] md:text-sm w-full md:w-[80%] text-justify">
            Designed and developed by Rimsha Arshad. A passionate frontend developer focused on creating elegant, responsive, and user-friendly digital experiences.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <div className="space-y-1 grid grid-cols-2 md:grid-cols-1">
            <div>
              <Link href="/" className="hover:text-[#353535] transition px-2">Home</Link>
            </div>
            <div>
              <Link href="/about" className="hover:text-[#353535] transition px-2">About</Link>
            </div>
            <div>
              <Link href="/projects" className="hover:text-[#353535] transition px-2">projects</Link>
            </div>
            <div>
              <Link href="/contact" className="hover:text-[#353535] transition px-2">Contact</Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm mb-2">House no. 1726/1875 Ghous Nagar Baldia Town Karachi, Pakistan</p>
          <p className="text-sm mb-2 font-semibold">Email: <a href="mailto:rimshaarshad374@gmail.com" className="underline hover:text-[#353535] font-normal">rimshaarshad374@gmail.com</a></p>
          <p className="text-sm font-semibold">Phone: <a href="tel:+03223955488" className="underline hover:text-[#353535] font-normal">+92 3223955488</a></p>
        </div>
      </div>
      <div className="bg-[#d5bea2] md:bg-[#000] text-black md:text-[#ffe4c4] text-center py-4 text-[0.7rem] md:text-sm">
        © {new Date().getFullYear()} Rimsha Arshad. All rights reserved.
      </div>
    </footer>
  );
}