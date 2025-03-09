import React from "react";
import ctaBg from "../assets/Images/cta bg.svg";

export default function CTASection() {
  return (
    <div
      className="relative max-w-6xl m-auto flex items-center justify-center sm:h-[350px] md:h-[420px] bg-cover bg-center rounded-2xl px-6 sm:px-12"
      style={{ 
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
     }}
    >
      <div className="absolute inset-0 bg-opacity-60 rounded-2xl"></div>

      <div className="relative text-center text-white max-w-2xl">
        <div className="flex justify-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm">
            Free to join
          </span>
          <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm">
            Priority access
          </span>
          <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm">
            No obligation
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold">
          Step Into a New Era of Finance
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-300">
          Join thousands of users enjoying smarter banking, instant credit, and
          seamless payments all in one secure platform. Sign up in minutes and
          experience financial freedom like never before.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full sm:w-auto px-4 py-3 rounded-full bg-white text-gray-700 outline-none"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
