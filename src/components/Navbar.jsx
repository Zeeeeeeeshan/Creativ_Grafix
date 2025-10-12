import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      icon: "/NavHome.png",
      name: "HOME",
      path: "/",
    },
    {
      icon: "/NavAbout.svg",
      name: "ABOUT",
      path: "/about",
    },
    {
      icon: "/NavServices.svg",
      name: "SERVICES",
      path: "/services",
    },
    {
      icon: "/NavProducts.svg",
      name: "PRODUCTS",
      path: "/products",
    },
    {
      icon: "/NavContact.svg",
      name: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <>
      <div className="h-25"></div>
      <div className="w-full font-anta fixed top-0 z-50">
        <div className="flex flex-col sm:flex-row items-center justify-evenly bg-[#333333] text-gray-200 py-1">
          <div className="flex">
            <img src="/NavbarWhatsApp.svg" alt="" className="mr-2 " />
            939227180
          </div>
          <div className="text-xs md:text-lg">
            Diwali Sale: <b>FLAT 10% off</b>, save upto ₹1000! Use code{" "}
            <span className="text-red-700">DIWALI10</span>
          </div>
          <div className="hidden lg:flex">
            <img src="/NavbarClock.svg" alt="" />
            Mon-Sat: 9 AM - 9 PM
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className="bg-grayShade w-full border-b-2 border-b-redShade relative flex">
          {/* Logo */}
          <Link
            to="/"
            className="absolute top-0 left-2/6 md:left-[40%] lg:left-8  p-3 rounded-b-2xl bg-white shadow-lg shadow-black/30 z-50"
          >
            <img
              src="/NavLogo.svg"
              alt="logo"
              className="h-20 w-30 md:h-20 md:w-30"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:justify-end xl:justify-between w-full lg:gap-x-36 px-6">
            <div className="hidden xl:block"></div>
            <nav className="flex gap-x-2 xl:gap-x-6 ml-14">
              {navLinks.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.name}
                  className={({ isActive }) =>
                    `flex items-center py-6 px-3 gap-x-1.5 border-b-2 transition-all duration-200 ${
                      isActive
                        ? "border-b-redShade bg-gradient-to-b from-redShade/10 to-transparent"
                        : "border-b-transparent hover:border-b-redShade/50"
                    }`
                  }
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className={`${link.name == "HOME" ? "w-4 h-4" : "w-5 h-5"}`}
                  />
                  <span className="text-sm xl:text-base">{link.name}</span>
                </NavLink>
              ))}
            </nav>
            <div className="hidden xl:block"></div>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full px-4 py-6 gap-x-4">
            {/* Mobile Cart & User Icons */}
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-y-1.5 w-8 h-8 justify-center items-center focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-7 h-0.5 bg-redShade transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-0.5 bg-redShade transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-0.5 bg-redShade transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
            <div className="flex items-center gap-x-4">
              <div className="relative cursor-pointer">
                <img src="/NavCart.svg" alt="Cart" className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 px-1.5 bg-redShade rounded-full text-white text-xs">
                  0
                </span>
              </div>
              <img
                src="/NavLogin.svg"
                alt="Login"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 border-b-2 border-redShade"
              : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                to={link.path}
                key={link.name}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center py-4 px-6 gap-x-3 border-l-4 transition-all ${
                    isActive
                      ? "border-l-redShade bg-redShade/10"
                      : "border-l-transparent hover:border-l-redShade hover:bg-gray-50"
                  }`
                }
              >
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  className="w-5 h-5"
                />
                <span className="text-base">{link.name}</span>
              </NavLink>
            ))}
            <div className="border-t border-gray-200 py-4 px-6">
              <button className="w-full flex items-center justify-center gap-x-2 px-4 py-3 border-[1.5px] border-redShade hover:bg-redShade hover:text-white transition-colors">
                <img src="/NavLogin.svg" alt="Login" className="w-5 h-5" />
                LOG IN
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
