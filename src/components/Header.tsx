"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import CTAButton from "./CTAButton"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[var(--ivory)] text-[var(--primary)] px-6 py-4 shadow-md fixed w-full z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo cliquable */}
        <a href="/" className="font-serif text-2xl hover:text-olive">
          La Ferme d'Orthe
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 font-serif text-base uppercase tracking-wide">
          <a href="/" className="hover:text-beige">Accueil</a>
          <a href="/#menu" className="hover:text-beige">Menu</a>
          <a href="/restaurant" className="hover:text-beige">À propos</a>
          <a href="/reservations" className="hover:text-beige">Réservations</a>
          <a href="/contact" className="hover:text-beige">Contact</a>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--ivory)] px-6 pt-4 pb-6 space-y-4 font-serif uppercase text-base">
          <a href="/" className="block hover:text-beige" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="/#menu" className="block hover:text-beige" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="/restaurant" className="block hover:text-beige" onClick={() => setIsOpen(false)}>À propos</a>
          <a href="/reservations" className="block hover:text-beige" onClick={() => setIsOpen(false)}>Réservations</a>
          <a href="/contact" className="block hover:text-beige" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  )
}
