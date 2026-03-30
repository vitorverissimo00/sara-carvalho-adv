import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Áreas de Atuação', path: '/servicos' },
    { name: 'Dúvidas', path: '/faq' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border-theme"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Scale className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-foreground leading-none">Sara Carvalho</span>
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Advogada Previdenciarista</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-border-theme pl-8">
              <ThemeToggle />
              <a
                href="https://wa.me/55032984320601"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-dark transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border-theme overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-border-theme ${
                    location.pathname === link.path ? 'text-gold' : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a
                  href="https://wa.me/55032984320601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
