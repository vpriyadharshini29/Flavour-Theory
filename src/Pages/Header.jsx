import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProgramsDropdown = () => {
    setIsProgramsOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#fff5e4] font-poppins py-4 px-4 sm:px-6 md:px-8 shadow-md fixed top-0 left-0 w-full z-50 overflow-x-hidden">
      {/* Container */}
      <div className="flex justify-between items-center max-w-7xl mx-auto overflow-x-hidden w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Flavour Theory Logo"
            className="w-[140px] sm:w-[160px] h-auto max-w-full"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[#5c4a3c] text-[17px] font-medium whitespace-nowrap">
          <Link to="/" className="hover:text-[#D57A66] transition no-underline text-black">HOME</Link>
          <Link to="/about" className="hover:text-[#D57A66] transition no-underline text-black">ABOUT</Link>

          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-[#D57A66] transition"
              onClick={toggleProgramsDropdown}
            >
              PROGRAMS <span className="text-sm">▼</span>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-52 bg-[#fff5e4] shadow-lg rounded-md overflow-hidden z-40 ${
                isProgramsOpen ? "block" : "hidden"
              }`}
            >
              <Link to="/bakery" className="block px-4 py-2 hover:bg-[#f4e6cf] no-underline text-black">BAKERY BUSINESS</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-[#f4e6cf] no-underline text-black">ACCELERATOR PROGRAM</Link>
              <Link to="/cloud" className="block px-4 py-2 hover:bg-[#f4e6cf] no-underline text-black">CLOUD KITCHEN</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-[#f4e6cf] no-underline text-black">ACCELERATOR</Link>
            </div>
          </div>

          <Link to="/course" className="hover:text-[#D57A66] transition no-underline text-black">COURSES</Link>
          <Link to="/contact" className="hover:text-[#D57A66] transition no-underline text-black">CONTACT</Link>
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <Link to="/login">
            <button className="bg-[#D57A66] text-white px-5 py-2 rounded-full font-bold hover:opacity-90 transition whitespace-nowrap">
              LOGIN
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-2 space-y-2 text-base text-black font-semibold overflow-x-hidden">
          <Link to="/" className="block hover:text-[#D57A66]">HOME</Link>
          <Link to="/about" className="block hover:text-[#D57A66]">ABOUT</Link>
          <details className="cursor-pointer">
            <summary className="hover:text-[#D57A66]">PROGRAMS</summary>
            <div className="ml-4 mt-1 space-y-1">
              <Link to="/bakery" className="text-black block hover:text-[#D57A66]">BAKERY BUSINESS</Link>
              <Link to="#" className="text-black block hover:text-[#D57A66]">ACCELERATOR PROGRAM</Link>
              <Link to="/cloud" className="text-black block hover:text-[#D57A66]">CLOUD KITCHEN</Link>
              <Link to="#" className=" text-black block hover:text-[#D57A66]">ACCELERATOR</Link>
            </div>
          </details>
          <Link to="/course" className="text-black block hover:text-[#D57A66]">COURSES</Link>
          <Link to="/contact" className="text-black block hover:text-[#D57A66]">CONTACT</Link>
          <Link to="/login">
            <button className="mt-3 w-full bg-[#D57A66] text-white py-2 rounded-full font-bold hover:opacity-90">
              LOGIN
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
