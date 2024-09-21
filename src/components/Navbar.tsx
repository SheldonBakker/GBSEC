import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false); // Close dropdown when toggling menu
  };

  const handleLinkClick = (link: string) => {
    if (link !== '/gunshop') {
      setActiveLink(link);
      setIsOpen(false); // Close mobile menu when a link is clicked
      setDropdownOpen(false); // Close dropdown if not 'Gun Shop'
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'GBMED', path: '/gbmed' },
    { name: 'Academy', path: '/academy' },
    { name: 'Gun Shop', path: '/gunshop/shooting-range', dropdown: true },
    { name: 'Special OPS', path: '/special-op' },
    { name: 'PSIRA Grades', path: '/psira-grades' },
    { name: 'Internet', path: '/internet' }
  ];

  return (
    <nav className="bg-gradient-to-r from-black via-red-900 to-black shadow-lg fixed w-full z-50"> {/* Increase z-index */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Gordons Bay Security Trust Logo" className="h-12 w-12" />
          <span className="text-2xl font-extrabold text-yellow-500">Gordons Bay Security Trust</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          {links.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <Link
                to={link.path}
                className={`nav-link ${activeLink === link.path ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </Link>
              {link.dropdown && dropdownOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md p-2 z-50"> {/* Add z-index for dropdown */}
                  <Link
                    to="/gunshop/shooting-range"
                    className="dropdown-item"
                    onClick={() => handleLinkClick('/gunshop/shooting-range')}
                  >
                    Shooting Range
                  </Link>
                  <Link
                    to="/gunshop/accessories"
                    className="dropdown-item"
                    onClick={() => handleLinkClick('/gunshop/accessories')}
                  >
                    Rifle Scopes/Accessories
                  </Link>
                  <Link
                    to="/gunshop/ammunition"
                    className="dropdown-item"
                    onClick={() => handleLinkClick('/gunshop/ammunition')}
                  >
                    Ammunition
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50"> {/* Ensure button is in front */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-stone-500 transition-all duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} 
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex flex-col items-center space-y-6">
          {links.map((link) => (
            <div
              key={link.path}
              className="relative"
              onClick={() => {
                if (link.dropdown) {
                  handleDropdownClick();
                } else {
                  handleLinkClick(link.path);
                }
              }}
            >
              <Link
                to={link.path}
                className={`text-2xl font-semibold text-white ${activeLink === link.path ? 'active' : ''} hover:text-yellow-400 transition-all duration-300`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </Link>
              {link.dropdown && dropdownOpen && (
                <div className="mt-2 flex flex-col items-center space-y-2">
                  <Link
                    to="/gunshop/shooting-range"
                    className="dropdown-item text-lg text-white hover:text-yellow-400 transition-all duration-300"
                    onClick={() => handleLinkClick('/gunshop/shooting-range')}
                  >
                    Shooting Range
                  </Link>
                  <Link
                    to="/gunshop/accessories"
                    className="dropdown-item text-lg text-white hover:text-yellow-400 transition-all duration-300"
                    onClick={() => handleLinkClick('/gunshop/accessories')}
                  >
                    Rifle Scopes/Accessories
                  </Link>
                  <Link
                    to="/gunshop/ammunition"
                    className="dropdown-item text-lg text-white hover:text-yellow-400 transition-all duration-300"
                    onClick={() => handleLinkClick('/gunshop/ammunition')}
                  >
                    Ammunition
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
