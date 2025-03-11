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
      <nav className="max-w-8xl py-6 px-6 md:px-40 mx-auto z-50 bg-transparent top-0 left-0 w-full relative">
        <div className="mx-auto relative text-sm flex justify-between items-center">
          {/* Logo (Left) */}
          <img src={logo} alt="logo" className="w-40" />

          {/* Join Waitlist Button (Center) - Always Visible */}
          <button
            className="px-3 py-2 md:ml-0 ml-15 md:text-sm text-[12px] rounded-full bg-white text-purple-600 cursor-pointer lg:hidden"
            onClick={() => setIsPopupOpen(true)}
          >
            Join Waitlist
          </button>

          {/* Mobile Menu Button (Right) */}
          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 text-[16px] space-x-12 text-white font-primary">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-black"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Help & Join Waitlist - Desktop */}
          <div className="hidden lg:flex space-x-6 text-[16px] items-center font-primary">
            <a
              href="#"
              className="flex gap-2 items-center text-white hover:text-blue-500"
            >
              Help <img src={helpLogo} alt="Help Icon" className="h-5" />
            </a>
            <button
              className="px-6 py-4 rounded-full bg-white text-(--color-purpel) cursor-pointer"
              onClick={() => setIsPopupOpen(true)}
            >
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="lg:hidden bg-white shadow-md rounded-md p-4 absolute w-full left-0 top-full z-50"
            onClick={() => setIsOpen(false)}
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block py-2 text-purple-600 hover:text-black"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.label}
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

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-white py-16 items-center justify-center p-6 rounded-lg shadow-lg w-full max-w-xl relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-2xl text-gray-500"
              onClick={() => setIsPopupOpen(false)}
            >
              ×
            </button>

            {/* Form */}
            <div className="flex flex-col text-center gap-3">
              <h2 className="text-xl font-bold mb-4 text-center">
                Early Access Awaits – Join the Waitlist Now!
              </h2>
              <div>
                <form
                  className="flex flex-col  sm:flex-row gap-1 md:gap-4 max-w-xl sm:max-w-xl md:max-w-md mx-auto"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full flex-1 md:text-left text-center px-4 sm:px-4 py-3 sm:py-4 rounded-full bg-purple-500/10 text-(--color-purpel) placeholder-black-200 focus:outline-none focus:ring-2 focus:ring-purple"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full md:text-sm sm:w-auto mt-2 sm:mt-0 px-4 sm:px-4 py-3 sm:py-4 rounded-full bg-(--color-purpel) text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    disabled={loading}
                  >
                    {loading ? "Submitting.." : "Join waitlist"}
                  </button>
                </form>
                {responseMessage && <p className="pt-3 mx-auto">{responseMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
