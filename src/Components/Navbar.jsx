import { useState } from "react";
import logo from "../assets/Images/Kandela Logo.svg";
import helpLogo from "../assets/Icon/customer-service-01.svg";
import { navItems } from "../Constants/index";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-8xl py-8 px-20 mx-auto z-10">
      <div className="container mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-(--color-white) font-primary">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-blue-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Help & Join Waitlist */}
          <div className="hidden lg:flex space-x-6 items-center font-primary">
            <a href="#" className="flex gap-2 items-center text-(--color-white) hover:text-blue-500">
              Help <img src={helpLogo} alt="Help Icon" className="h-5" />
            </a>
            <a
              href="#"
              className="px-4 py-4 rounded-full bg-white text-(--color-purpel)"
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
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block py-2 text-(--color-white) hover:text-blue-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Help & Join Waitlist in Mobile */}
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#" className="flex gap-2 items-center text-(--color-white) hover:text-blue-500">
                Help <img src={helpLogo} alt="Help Icon" className="h-5" />
              </a>
              <a
                href="#"
                className="px-4 py-4 rounded-full bg-white text-(--color-purpel) text-center"
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