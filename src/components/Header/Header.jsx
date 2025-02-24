import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logomain from "../Header/logo.png"
import { menuItems } from '../../../utils/menuItems';



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const MenuItem = ({ item, index }) => {
    const hasDropdown = item.dropdownItems?.length > 0;
    const isActive = activeDropdown === index;

    const handleMenuClick = (e) => {
      if (hasDropdown && window.innerWidth < 768) {
        // For mobile: toggle dropdown when clicking the menu item
        e.preventDefault();
        setActiveDropdown(isActive ? null : index);
      }
      // For desktop or items without dropdown: default link behavior will navigate to the page
    };

    const handleDropdownToggle = (e) => {
      if (hasDropdown) {
        e.stopPropagation();
        setActiveDropdown(isActive ? null : index);
      }
    };

    return (
      <li 
        className="relative group" 
        onMouseEnter={() => hasDropdown && window.innerWidth >= 768 && setActiveDropdown(index)}
        onMouseLeave={() => hasDropdown && window.innerWidth >= 768 && setActiveDropdown(null)}
      >
        <Link
          to={item.path}
          className="block py-2 px-4 text-black hover:bg-red-700 transition-colors duration-200"
          onClick={handleMenuClick}
        >
          {item.title}
          {hasDropdown && (
            <span 
              className="ml-1 inline-block md:hidden" 
              onClick={handleDropdownToggle}
            >
              {isActive ? '▲' : '▼'}
            </span>
          )}
        </Link>
        {hasDropdown && (
          <ul
            className={`${isActive ? 'block' : 'hidden'} md:group-hover:block absolute left-0 bg-gray-800 shadow-lg mt-0 rounded min-w-[200px] z-50`}
          >
            {item.dropdownItems.map((dropdownItem, idx) => (
              <li key={idx}>
                <Link
                  to={dropdownItem.path}
                  className="block px-4 py-2 text-white hover:bg-red-700 whitespace-nowrap transition-colors duration-200"
                >
                  {dropdownItem.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-black-200">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo and Heading Container */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Logo */}
          <img
            src={logomain}
            alt="J.D GLOBAL SCHOOL Logo"
            className="w-16 h-auto md:w-20 lg:w-24"
          />
          {/* Heading */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-red-600">
            J.D GLOBAL SCHOOL
          </h1>
        </div>

        {/* Help and Admission Section */}
        <div className="hidden md:flex items-center space-x-4">
          <p className="text-lg">Need Help? Call us free</p>
          <a href="tel:9555744337" className="text-lg font-semibold">9555744337</a>
          <Link to="/admission" className="bg-[#ffc600] text-white px-6 py-4 rounded hover:bg-red-700 transition duration-300">
            ADMISSION OPEN!
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block bg-white-800`} ref={dropdownRef}>
        <div className="container mx-auto px-4 border-t border-black-600">
          <ul className="md:flex md:space-x-6 py-2">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;