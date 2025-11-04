// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import duenLogo from "../assets/duen.webp"; // adjust path if needed


const pathByLabel = {
  Home: "",
  Team: "/team",
  Photos: "/photos",
};

const menuLinks = ["Home", "Team", "Photos"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#190A1D] text-white">
      <div className="max-w mx-auto flex items-center justify-between h-[60px] px-5">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <img src={duenLogo} alt="DUEN Logo" className="h-[40px] w-auto" />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8" aria-label="Primary">
          {menuLinks.map((label) => (
            <Link
              key={label}
              to={pathByLabel[label]}
              className="font-poppins text-lg hover:text-[#E9D7AF] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <nav
        className={`md:hidden bg-[#190A1D] overflow-hidden transition-[max-height] duration-300`}
        style={{
          maxHeight: menuOpen ? "12rem" : "0rem",
        }}
        aria-label="Mobile"
      >
        <div className="flex flex-col items-center">
          {menuLinks.map((label) => (
            <Link
              key={label}
              to={pathByLabel[label]}
              className="font-poppins text-lg py-3 hover:text-[#E9D7AF] w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      
    </header>
  );
}
