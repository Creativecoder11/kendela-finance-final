import { useState } from "react";
import logo from "../assets/Kandela Logo.svg";
import helpLogo from "../assets/customer-service-01.svg";
import { navItems } from "../Constants/index";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-5 py-8">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10" src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-blue-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Help & Join Waitlist */}
          <div className="hidden lg:flex space-x-6 items-center">
            <a href="#" className="flex gap-2 items-center hover:text-blue-500">
              Help <img src={helpLogo} alt="Help Icon" className="h-5" />
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-full border bg-white border-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-3 bg-white shadow-md rounded-md p-4 absolute w-full left-0 top-full z-40">
            <ul className="flex flex-col space-y-4 text-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block py-2 hover:text-blue-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Help & Join Waitlist in Mobile */}
            <div className="flex flex-col items-center space-y-4 mt-4">
              <a href="#" className="flex gap-2 items-center hover:text-blue-500">
                Help <img src={helpLogo} alt="Help Icon" className="h-5" />
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-full border bg-white border-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
