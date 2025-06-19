import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import logo from './img/logo.png';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
<img 
  src={logo} 
  alt="Logo Visiontech" 
  className={`h-14 md:h-16 transition-all duration-300 ${
    isScrolled ? '' : 'filter brightness-0 invert'
  }`} 
/>


              </div>
            </div>
            
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['inicio', 'servicos', 'sobre', 'projetos', 'contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium transition-colors duration-300 hover:text-primary-400 ${
                      isScrolled ? 'text-primary-900' : 'text-white'
                    }`}
                  >
                    {item === 'inicio' ? 'Início' : 
                     item === 'servicos' ? 'Serviços' : 
                     item === 'sobre' ? 'Sobre' : 
                     item === 'projetos' ? 'Projetos' : 'Contato'}
                  </button>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-primary-900' : 'text-white'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md`}>
          <div className="px-4 py-4 space-y-4">
            {['inicio', 'servicos', 'sobre', 'projetos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-primary-900 font-medium hover:text-primary-600 transition-colors duration-300"
              >
                {item === 'inicio' ? 'Início' : 
                 item === 'servicos' ? 'Serviços' : 
                 item === 'sobre' ? 'Sobre' : 
                 item === 'projetos' ? 'Projetos' : 'Contato'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Scroll to top button */}
      {isScrolled && (
        <button
          onClick={() => scrollToSection('inicio')}
          className="fixed bottom-8 right-8 z-40 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transform hover:scale-110 transition-all duration-300 animate-bounce-subtle"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Header;