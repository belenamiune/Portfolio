"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-wedgewood-800 text-md text-wedgewood-100 font-semibold p-4 flex justify-between items-center z-50">
      
      {/* Logo o Título */}
      <a href="#home" className="text-lg font-bold text-wedgewood-100">MyPortfolio</a>

      {/* Botón Hamburguesa en móviles */}
      <button className="lg:hidden text-wedgewood-100 text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links (Desktop) */}
      <div className="hidden lg:flex gap-6">
        <a href="#home" className="hover:text-wedgewood-400">Home</a>
        <a href="#about" className="hover:text-wedgewood-400">About</a>
        <a href="#portfolio" className="hover:text-wedgewood-400">Portfolio</a>
        <a href="#contact" className="hover:text-wedgewood-400">Contact</a>
      </div>

      {/* Menú Desplegable (Mobile) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-wedgewood-900 bg-opacity-90 flex flex-col items-center gap-6 py-6 lg:hidden">
          <a href="#home" className="hover:text-wedgewood-400" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-wedgewood-400" onClick={() => setIsOpen(false)}>About</a>
          <a href="#portfolio" className="hover:text-wedgewood-400" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" className="hover:text-wedgewood-400" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
