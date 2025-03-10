// import { useState } from "react";
// import logo from "../assets/Images/Kandela Logo.svg";
// import helpLogo from "../assets/Icon/customer-service-01.svg";
// import { navItems } from "../Constants/index";
// import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="max-w-8xl py-6 px-6 md:px-20 mx-auto z-10">
//       <div className="mx-auto relative text-sm">
//         <div className="flex justify-between items-center w-full">
//           {/* Logo & Mobile Menu Button */}
//           <div className="flex justify-between items-center w-full lg:w-auto">
//             {/* Logo */}
//             <img src={logo} alt="logo" className="h-9 md:h-12" />

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden text-2xl"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <FiX className="text-white" />
//               ) : (
//                 <FiMenu className="text-white" />
//               )}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex ml-14 space-x-12 text-white font-primary">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   className="hover:text-black"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const target = document.querySelector(item.href);
//                     if (target) {
//                       target.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start",
//                       });
//                     }
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Help & Join Waitlist */}
//           <div className="hidden lg:flex space-x-6 items-center font-primary">
//             <a
//               href="#"
//               className="flex gap-2 items-center text-white hover:text-blue-500"
//             >
//               Help <img src={helpLogo} alt="Help Icon" className="h-5" />
//             </a>
//             <a
//               href="#"
//               className="px-4 py-2 rounded-full bg-white text-purple-600"
//             >
//               Join Waitlist
//             </a>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden mt-2 flex flex-col justify-between bg-white shadow-md rounded-md p-4 absolute w-full left-0 top-full z-40">
//             <ul className="flex flex-col space-y-4">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   className="hover:text-black"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const target = document.querySelector(item.href);
//                     if (target) {
//                       target.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start",
//                       });
//                     }
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             </ul>

//             {/* Help & Join Waitlist in Mobile */}
//             <div className="flex flex-col max-w-sm space-y-4 mt-5">
//               <a
//                 href="#"
//                 className="flex gap-2 items-center text-purple-600 hover:text-black"
//               >
//                 Help <img src={helpLogo} alt="Help Icon" className="h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-[40%] py-2 rounded-full bg-purple-600 text-white text-center"
//               >
//                 Join Waitlist
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// import { useState } from "react";
// import logo from "../assets/Images/Kandela Logo.svg";
// import helpLogo from "../assets/Icon/customer-service-01.svg";
// import { navItems } from "../Constants/index";
// import { FiMenu, FiX } from "react-icons/fi";
// import useSubmitEmail from "../Hook/EmailCollector"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const { formData, loading, responseMessage, handleChange, handleSubmit } =
//     useSubmitEmail();

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="max-w-8xl py-6 px-6 md:px-20 mx-auto z-10 bg-transparent top-0 left-0 w-full">
//         <div className="mx-auto relative text-sm flex justify-between items-center">
//           {/* Logo (Left) */}
//           <img src={logo} alt="logo" className="h-9 md:h-12" />

//           {/* Join Waitlist Button (Center) - Always Visible */}
//           <button
//             className="px-4 py-2 md:ml-0 ml-16 rounded-full bg-white text-purple-600 cursor-pointer lg:hidden"
//             onClick={() => setIsPopupOpen(true)}
//           >
//             Join Waitlist
//           </button>

//           {/* Mobile Menu Button (Right) */}
//           <button className="lg:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex ml-14 space-x-12 text-white font-primary">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   className="hover:text-black"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Help & Join Waitlist - Desktop */}
//           <div className="hidden lg:flex space-x-6 items-center font-primary">
//             <a href="#" className="flex gap-2 items-center text-white hover:text-blue-500">
//               Help <img src={helpLogo} alt="Help Icon" className="h-5" />
//             </a>
//             <button
//               className="px-4 py-2 rounded-full bg-white text-purple-600 cursor-pointer"
//               onClick={() => setIsPopupOpen(true)}
//             >
//               Join Waitlist
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden mt-2 bg-white shadow-md rounded-md p-4 absolute w-full left-0 top-full z-400">
//             <ul className="flex flex-col space-y-4">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={item.href}
//                     className="block py-2 text-purple-600 hover:text-black"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setIsOpen(false);
//                       document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
//                     }}
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Help Link */}
//             <div className="flex flex-col max-w-sm space-y-4 mt-5">
//               <a href="#" className="flex gap-2 items-center text-purple-600 hover:text-black">
//                 Help <img src={helpLogo} alt="Help Icon" className="h-5" />
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Popup Modal */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black flex justify-center items-center z-50 p-4">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//             {/* Close Button */}
//             <button className="absolute top-2 right-2 text-2xl text-gray-500" onClick={() => setIsPopupOpen(false)}>
//               ×
//             </button>

//             {/* Form */}
//             <h2 className="text-xl font-bold mb-4 text-center">Join the Waitlist</h2>
//             <form
//               className="flex flex-col gap-4"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Join Waitlist"}
//               </button>
//             </form>

//             {/* Response Message */}
//             {responseMessage && (
//               <p className="text-center text-green-600 mt-4">{responseMessage}</p>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

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
      <nav className="max-w-8xl py-6 px-6 md:px-20 mx-auto z-50 bg-transparent top-0 left-0 w-full relative">
        <div className="mx-auto relative text-sm flex justify-between items-center">
          {/* Logo (Left) */}
          <img src={logo} alt="logo" className="h-9 md:h-12" />

          {/* Join Waitlist Button (Center) - Always Visible */}
          <button
            className="px-4 py-2 md:ml-0 ml-16 rounded-full bg-white text-purple-600 cursor-pointer lg:hidden"
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
          <ul className="hidden lg:flex ml-14 space-x-12 text-white font-primary">
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
          <div className="hidden lg:flex space-x-6 items-center font-primary">
            <a
              href="#"
              className="flex gap-2 items-center text-white hover:text-blue-500"
            >
              Help <img src={helpLogo} alt="Help Icon" className="h-5" />
            </a>
            <button
              className="px-4 py-2 rounded-full bg-white text-purple-600 cursor-pointer"
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
                    placeholder="Your Email"
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
