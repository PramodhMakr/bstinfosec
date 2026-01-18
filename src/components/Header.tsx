import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/faq', label: 'FAQ' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-600/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <Shield className="h-10 w-10 text-blue-600 fill-blue-600 group-hover:text-blue-700 group-hover:fill-blue-700 transition-colors" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">BST Infosec</span>
              <span className="text-xs text-blue-600 -mt-1">Technologies</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`nav-link text-sm font-medium transition-colors relative group py-2 px-3 rounded-md ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-6 left-0 right-0 h-0.5 bg-blue-600 transition-transform ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 p-3 hover:bg-slate-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-600/20 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            <ul>
              <li>
                <Link to="/" onClick={handleNavClick} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNavClick} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={handleNavClick} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/careers" onClick={handleNavClick} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleNavClick} className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
