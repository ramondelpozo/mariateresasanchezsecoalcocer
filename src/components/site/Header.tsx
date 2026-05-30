"use client"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-gray-900 text-white relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold z-50 relative">
          María Teresa Sánchez-Seco
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-amber-400 transition">Inicio</Link>
          <Link href="/servicios" className="hover:text-amber-400 transition">Servicios</Link>
          <Link href="/sobre-mi" className="hover:text-amber-400 transition">Sobre el Despacho</Link>
          <Link href="/blog" className="hover:text-amber-400 transition">Blog</Link>
          <Link href="/contacto" className="hover:text-amber-400 transition">Contacto</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 z-50 relative text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - FIX DEFINITIVO: Posicionamiento explícito */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-gray-900 border-t border-gray-700 shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-40 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ top: '100%' }} // 👈 Esto fuerza que baje, sin depender de Tailwind
      >
        <div className="flex flex-col">
          <Link href="/" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-800 transition text-left">Inicio</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-800 transition text-left">Servicios</Link>
          <Link href="/sobre-mi" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-800 transition text-left">Sobre el Despacho</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-800 transition text-left">Blog</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="px-6 py-4 hover:bg-gray-800 transition text-left">Contacto</Link>
        </div>
      </div>
    </header>
  )
}