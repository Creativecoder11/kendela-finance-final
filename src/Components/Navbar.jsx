// import { useState } from "react";
// import logo from "../assets/Images/Kandela Logo.svg";
// import helpLogo from "../assets/Icon/customer-service-01.svg";
// import { navItems } from "../Constants/index";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="max-w-8xl py-7 px-6 md:px-40 mx-auto z-50 bg-transparent top-0 left-0 w-full relative">
//         <div className="mx-auto relative text-sm flex justify-between items-center">
//           {/* Logo (Left) */}
//           <img src={logo} alt="logo" className="w-50" />
//           <button
//             className="lg:hidden text-2xl text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex -ml-30 text-[16px] space-x-12 text-white font-primary">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   className="relative group hover:text-white"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document
//                       .querySelector(item.href)
//                       ?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   {item.label}
//                   {/* Sliding Underline Effect */}
//                   <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Help & Join Waitlist - Desktop */}
//           <div className="hidden lg:flex space-x-6 text-[16px] items-center font-primary">
//             <a href="#" className="flex gap-2 items-center text-white ">
//               Help <img src={helpLogo} alt="Help Icon" className="h-5" />
//             </a>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div
//             className="lg:hidden bg-white shadow-md rounded-md p-4 absolute w-[40%] right-8 top-20 z-50"
//             onClick={() => setIsOpen(false)}
//           >
//             <ul className="flex flex-col space-y-4">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={item.href}
//                     className="relative block py-2 text-purple-600 group"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setIsOpen(false);
//                       document
//                         .querySelector(item.href)
//                         ?.scrollIntoView({ behavior: "smooth" });
//                     }}
//                   >
//                     {item.label}
//                     {/* Sliding Underline */}
//                     <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Help Link */}
//             <div className="flex flex-col max-w-sm space-y-4 mt-5">
//               <a
//                 href="#"
//                 className="flex gap-2 items-center text-purple-600 hover:text-black"
//               >
//                 Help <img src={helpLogo} alt="Help Icon" className="h-5" />
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

import { useState } from "react";
import logo from "../assets/Images/Kandela Logo.svg";
import helpLogo from "../assets/Icon/customer-service-01.svg";
import { navItems } from "../Constants/index";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 left-0 z-50 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24 flex justify-between items-center py-6">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-32 sm:w-50" />

        {/* Menu Button - Mobile */}
        <button
          className="lg:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 md:space-x-8 lg:space-x-13 lg:-ml-25 text-white text-base md:text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className=" font-primary relative group hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Help Section - Desktop */} 
        <div className="hidden lg:flex lg:text-lg items-center space-x-4">
          <a href="#" className=" font-primary flex items-center gap-2 text-white hover:text-gray-300">
            Help <img src={helpLogo} alt="Help Icon" className="h-5" />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-0 z-100 right-0 w-2/4 sm:w-1/3 md:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-5">
          <button
            className="text-3xl text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col items-start space-y-3 px-6 text-base sm:text-lg text-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block py-2 hover:text-purple-600 transition"
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

        {/* Help Section - Mobile */}
        <div className="px-6 mt-8">
          <a
            href="#"
            className="flex items-center gap-2 text-purple-600 hover:text-black transition"
          >
            Help <img src={helpLogo} alt="Help Icon" className="h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

 