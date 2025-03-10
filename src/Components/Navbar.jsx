import { useState } from "react";
import logo from "../assets/Images/Kandela Logo.svg";
import helpLogo from "../assets/Icon/customer-service-01.svg";
import { navItems } from "../Constants/index";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-8xl py-6 px-6 md:px-20 mx-auto z-10">
      <div className="mx-auto relative text-sm">
        <div className="flex justify-between items-center w-full">
          {/* Logo & Mobile Menu Button */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            {/* Logo */}
            <img src={logo} alt="logo" className="h-9 md:h-12" />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-white font-primary">
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
            <a href="#" className="flex gap-2 items-center text-white hover:text-blue-500">
              Help <img src={helpLogo} alt="Help Icon" className="h-5" />
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-full bg-white text-purple-600"
            >
              Join Waitlist
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 flex flex-col justify-between bg-white shadow-md rounded-md p-4 absolute w-full left-0 top-full z-40">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block py-2 text-purple-600 hover:text-black">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Help & Join Waitlist in Mobile */}
            <div className="flex flex-col max-w-sm space-y-4 mt-5">
              <a href="#" className="flex gap-2 items-center text-purple-600 hover:text-black">
                Help <img src={helpLogo} alt="Help Icon" className="h-5" />
              </a>
              <a
                href="#"
                className="w-[40%] py-2 rounded-full bg-purple-600 text-white text-center"
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
