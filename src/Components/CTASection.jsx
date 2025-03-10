import React from "react";
import ctaBg from "../assets/Images/cta bg.svg";

export default function CTASection() {
  return (
    <div
      className="mt-15 mb-30  max-w-6xl m-auto flex items-center justify-center sm:h-[350px] md:h-[420px] bg-cover bg-center rounded-2xl sm:px-12"
      style={{ 
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
     }}
    >

      <div className="text-center text-white max-w-xl">
        <div className="flex justify-center gap-3 mb-4">
          <span className="font-primary px-3 py-1 bg-[#EFE9FC] text-purple-700 rounded-full text-sm">
            Free to join
          </span>
          <span className="font-primary px-3 py-1 bg-[#EFE9FC] text-purple-700 rounded-full text-sm">
          Priority access
          </span>
          <span className="font-primary px-3 py-1 bg-[#EFE9FC] text-purple-700 rounded-full text-sm">
          No obligation
          </span>
        </div>

        <h1 className="font-secondary text-3xl sm:text-5xl">
          Step Into a New Era <br/> of Finance
        </h1>
        <p className="font-primary mt-3 text-sm sm:text-lg text-gray-300">
          Join thousands of users enjoying smarter banking, instant credit, and
          seamless payments all in one secure platform. Sign up in minutes and
          experience financial freedom like never before.
        </p>

        <div className="flex flex-col mt-6 sm:flex-row gap-3 md: gap-4 max-w-lg sm:max-w-lg md:max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Enter Email"
            className="font-primary w-full flex-1 px-4 sm:px-6 py-2 sm:py-2 text-md rounded-full bg-white bg-opacity-40 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="font-primaryw-full sm:w-auto mt-2 sm:mt-0 px-2  sm:px-5 py-4 sm:py-3 rounded-full bg-(--color-purpel) text-sm text-white hover:shadow-lg transition transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
