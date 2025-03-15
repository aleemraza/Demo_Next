"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons
import Link from 'next/link'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-xl font-bold">MyApp</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/pages/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/pages/services" className="text-white hover:text-gray-300">Services</Link>
          <Link href="/pages/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 space-y-2">
          <a href="/" className="block text-white hover:text-gray-300">Home</a>
          <a href="/about" className="block text-white hover:text-gray-300">About</a>
          <a href="/services" className="block text-white hover:text-gray-300">Services</a>
          <a href="/contact" className="block text-white hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
}