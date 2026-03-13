import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white">BENJAMIN SILIQUE</div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-300">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/about" className="hover:text-primary transition">About Me</Link>
          <Link to="/services" className="hover:text-primary transition">Services</Link>
          <Link to="/contact" className="hover:text-primary transition">Contact Me</Link>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-primary text-black px-5 py-2 rounded-sm font-semibold text-sm hover:bg-white transition">
          <Phone size={16} /> Schedule a Call
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;