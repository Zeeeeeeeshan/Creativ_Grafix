import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { icon: "/NavHome.png", name: "HOME", path: "/" },
    { icon: "/NavAbout.svg", name: "ABOUT US", path: "/about" },
    { icon: "/NavServices.svg", name: "SERVICES", path: "/services" },
    { icon: "/NavProducts.svg", name: "PRODUCTS", path: "/products" },
    { icon: "/NavContact.svg", name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <div className="h-[123px]"></div>

      <div className="w-full fixed top-0 z-50">
        {/* Top Red Bar */}
        <div className="w-full bg-redShade h-[60px]"></div>

        {/* White Divider */}
        <div className="w-full h-[4px] bg-white"></div>

        {/* Bottom Grey Bar */}
        <div className="w-full bg-[#5f6164] h-[60px] flex items-center justify-center relative">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-x-8 text-white font-anta">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-x-2 px-3 py-2 border-b-2 transition-all ${
                    isActive
                      ? "border-red-600"
                      : "border-transparent hover:border-red-500"
                  }`
                }
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className={`${link.name === "HOME" ? "w-4 h-4" : "w-5 h-5"}`}
                />
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute right-5 top-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-y-1.5 w-8 h-8 justify-center items-center"
            >
              <span
                className={`w-7 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Center Logo Overlap */}
        <div className="absolute top-[-20px] left-2 md:left-8 z-50">
          <Link to="/" className="rounded-xl shadow-xl p-2">
            <img src="/Banner1.png" alt="logo" className="h-[110px] w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 border-b-2 border-red-600" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center py-4 px-6 gap-x-3 border-l-4 transition-all ${
                    isActive
                      ? "border-red-600 bg-red-100"
                      : "border-transparent hover:border-red-600 hover:bg-gray-50"
                  }`
                }
              >
                <img src={link.icon} alt={link.name} className="w-5 h-5" />
                <span className="text-base">{link.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
