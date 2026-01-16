import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleContactClick = () => {
    handleNavClick(SectionId.CONTACT);
  };

  const navLinks = [
    { label: 'SERVICES', id: SectionId.SERVICES },
    { label: 'RÉALISATIONS', id: SectionId.PORTFOLIO },
    { label: 'À PROPOS', id: SectionId.ABOUT },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className={`font-serif text-2xl tracking-tight font-semibold z-50 relative transition-colors duration-300 ${
              (isScrolled || !isHome || isMobileMenuOpen) ? 'text-stone-900' : 'text-white'
            }`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo(0,0);
            }}
          >
            Élégance Carrelage
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-medium tracking-[0.15em] uppercase hover:opacity-60 transition-opacity ${
                  isScrolled || !isHome ? 'text-stone-900' : 'text-stone-100 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <button
               onClick={handleContactClick}
               className={`px-8 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors rounded-sm ${
                 isScrolled || !isHome 
                   ? 'bg-[#292524] text-white hover:bg-stone-700' 
                   : 'bg-white text-stone-900 hover:bg-stone-100'
               }`}
            >
              Devis Gratuit
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
             <div className={`transition-colors duration-300 ${isMobileMenuOpen || isScrolled || !isHome ? 'text-stone-900' : 'text-white'}`}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-lg font-sans font-light tracking-[0.2em] uppercase text-stone-900 hover:text-stone-500 transition-colors"
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-8">
            <button
              onClick={handleContactClick}
              className="bg-[#292524] text-white px-10 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-stone-800 transition-colors rounded-none"
            >
              Devis Gratuit
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;