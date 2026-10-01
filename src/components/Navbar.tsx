
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Instagram } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled 
          ? "bg-wine/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white">
          <img 
            src="/lovable-uploads/3c76c1ca-52da-4636-8aa1-23712cb95923.png"
            alt="Scaffographe" 
            className="h-8 md:h-10" 
          />
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#films" className="text-white hover:text-gray-300 font-poppins transition-colors">
            FILMS
          </a>
          <a href="#vision" className="text-white hover:text-gray-300 font-poppins transition-colors">
            VISION
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 font-poppins transition-colors">
            CONTACT
          </a>
          
          <a href={isEnglish ? "/" : "/en"} className="text-white hover:text-gray-300 font-poppins transition-colors" aria-label="Switch language">
            {isEnglish ? "FR" : "EN"}
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.instagram.com/scaffographe/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:block text-white hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/scaffographe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-white hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <img
              src="/lovable-uploads/facebook-white.png"
              alt="Facebook"
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            />
          </a>
          <a 
            href="https://vimeo.com/scaffographe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:block text-white hover:text-gray-300 transition-colors"
            aria-label="Letterboxd"
          >
            <img 
              src="/lovable-uploads/18f369f1-f95f-4744-a0ad-d80b24e1275b.png" 
              alt="Letterboxd" 
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            />
          </a>
          <a 
            href="https://letterboxd.com/studio/scaffographe/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:block text-white hover:text-gray-300 transition-colors"
            aria-label="Vimeo"
          >
            <img 
              src="/lovable-uploads/4f5663dc-25c7-4e36-acd0-47600baa9479.png" 
              alt="Vimeo" 
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            />
          </a>
          
          <div className="block md:hidden">
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-wine z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <img 
            src="/lovable-uploads/3c76c1ca-52da-4636-8aa1-23712cb95923.png" 
            alt="Scaffographe" 
            className="h-8" 
          />
          <button 
            className="text-white" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-8 mt-16">
          <a 
            href="#films" 
            className="text-white text-2xl font-poppins"
            onClick={() => setMobileMenuOpen(false)}
          >
            FILMS
          </a>
          <a 
            href="#vision" 
            className="text-white text-2xl font-poppins"
            onClick={() => setMobileMenuOpen(false)}
          >
            VISION
          </a>
          <a 
            href="#contact" 
            className="text-white text-2xl font-poppins"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </a>
          <div className="flex space-x-6 mt-6">
            <a 
              href="https://www.instagram.com/scaffographe/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://www.facebook.com/scaffographe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              aria-label="Facebook"
            >
              <img
                src="/lovable-uploads/facebook-white.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a 
              href="https://vimeo.com/scaffographe"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white"
              aria-label="Letterboxd"
            >
              <img 
                src="/lovable-uploads/18f369f1-f95f-4744-a0ad-d80b24e1275b.png" 
                alt="Letterboxd" 
                className="w-8 h-8"
              />
            </a>
            <a 
              href="https://letterboxd.com/studio/scaffographe/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white"
              aria-label="Vimeo"
            >
              <img 
                src="/lovable-uploads/4f5663dc-25c7-4e36-acd0-47600baa9479.png" 
                alt="Vimeo" 
                className="w-8 h-8"
              />
            </a>
            <a 
              href={isEnglish ? "/" : "/en"}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white border border-white rounded-sm px-3 py-1 text-sm"
              aria-label="Switch language"
            >
              {isEnglish ? "FR" : "EN"}
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
