// import { useState } from "react";
// import useSubmitEmail from "./EmailCollector";
// import { usePopup } from "./PopupContext";

// export default function WaitlistPopup() {
//   const { isPopupOpen, closePopup } = usePopup();
//   const { formData, loading, responseMessage, handleChange, handleSubmit } = useSubmitEmail();

//   if (!isPopupOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
//       <div className="bg-white py-16 items-center justify-center p-6 rounded-lg shadow-lg w-full max-w-xl relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-2 right-3 text-2xl text-gray-500"
//           onClick={closePopup}
//         >
//           ×
//         </button>

//         {/* Form */}
//         <div className="flex flex-col text-center gap-3">
//           <h2 className="text-xl font-bold mb-4 text-center">
//             Early Access Awaits – Join the Waitlist Now!
//           </h2>
//           <div>
//             <form
//               className="flex flex-col sm:flex-row gap-1 md:gap-4 max-w-xl sm:max-w-xl md:max-w-md mx-auto"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full flex-1 md:text-left text-center px-4 sm:px-4 py-3 sm:py-4 rounded-full bg-purple-500/10 text-(--color-purpel) placeholder-black-200 focus:outline-none focus:ring-2 focus:ring-purple"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full md:text-sm sm:w-auto mt-2 sm:mt-0 px-4 sm:px-4 py-3 sm:py-4 rounded-full bg-(--color-purpel) text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting.." : "Join waitlist"}
//               </button>
//             </form>
//             {responseMessage && (
//               <p className="pt-3 mx-auto">{responseMessage}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import useSubmitEmail from "./EmailCollector";
import { usePopup } from "./PopupContext";

export default function WaitlistPopup() {
  const { isPopupOpen, closePopup } = usePopup();
  const { formData, loading, responseMessage, handleChange, handleSubmit } = useSubmitEmail();

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white py-16 items-center justify-center p-6 rounded-lg shadow-lg w-full max-w-xl relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-2xl text-gray-500"
          onClick={closePopup}
        >
          ×
        </button>

        {/* Form */}
        <div className="flex flex-col text-center gap-3">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Early Access Awaits – Join the Waitlist Now!
          </h2>
          <div>
            <form
              className="flex flex-col gap-4 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              {/* Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-full bg-purple-500/10 text-(--color-purpel) placeholder-black-200 focus:outline-none focus:ring-2 focus:ring-purple text-center md:text-left"
                required
              />
              
              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-full bg-purple-500/10 text-(--color-purpel) placeholder-black-200 focus:outline-none focus:ring-2 focus:ring-purple text-center md:text-left"
                required
              />
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-4 rounded-full bg-(--color-purpel) text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Join Waitlist"}
              </button>
            </form>
            
            {responseMessage && (
              <p className="pt-3 mx-auto">{responseMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}