import { useState } from "react";
import logo from "../assets/Images/Kandela Logo.svg";
import helpLogo from "../assets/Icon/customer-service-01.svg";
import { navItems } from "../Constants/index";
import { FiMenu, FiX } from "react-icons/fi";
import useSubmitEmail from "../Hook/EmailCollector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { formData, loading, responseMessage, handleChange, handleSubmit } =
    useSubmitEmail();

  return (
    <>
      {/* Navbar */}
      <nav className="max-w-8xl py-7 px-6 md:px-40 mx-auto z-50 bg-transparent top-0 left-0 w-full relative">
        <div className="mx-auto relative text-sm flex justify-between items-center">
          {/* Logo (Left) */}
          <img src={logo} alt="logo" className="w-50" />
          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex -ml-30 text-[16px] space-x-12 text-white font-primary">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative group hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                  {/* Sliding Underline Effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Help & Join Waitlist - Desktop */}
          <div className="hidden lg:flex space-x-6 text-[16px] items-center font-primary">
            <a href="#" className="flex gap-2 items-center text-white ">
              Help <img src={helpLogo} alt="Help Icon" className="h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="lg:hidden bg-white shadow-md rounded-md p-4 absolute w-[40%] right-8 top-20 z-50"
            onClick={() => setIsOpen(false)}
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="relative block py-2 text-purple-600 group"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.label}
                    {/* Sliding Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Help Link */}
            <div className="flex flex-col max-w-sm space-y-4 mt-5">
              <a
                href="#"
                className="flex gap-2 items-center text-purple-600 hover:text-black"
              >
                Help <img src={helpLogo} alt="Help Icon" className="h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
