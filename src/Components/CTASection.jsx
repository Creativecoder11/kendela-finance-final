import React from "react";
import ctaBg from "../assets/Images/cta bg.svg";
import useSubmitEmail from "../Hook/EmailCollector"

export default function CTASection() {
  const { formData, loading, responseMessage, handleChange, handleSubmit } =
    useSubmitEmail();
  return (
    <div
      className="md:mt-15 my-20 md:mb-30  max-w-6xl m-auto flex items-center justify-center md:h-[420px] h-[480px] bg-cover bg-center rounded-2xl md:px-12 px-4"
      style={{ 
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
     }}
    >

      <div className="text-center text-white max-w-xl">
        <div className="flex justify-center gap-3 mb-4">
          <span className="font-primary px-3 py-1 bg-[#EFE9FC] text-purple-700 rounded-full md:text-sm text-xs">
            Free to join
          </span>
          <span className="font-primary px-3 py-1 bg-[#EFE9FC] text-purple-700 rounded-full md:text-sm text-xs">
          Priority access
          </span>
          <span className="font-primary px-3 py-1 bg-[#EFE9FC] text-purple-700 rounded-full md:text-sm text-xs">
          No obligation
          </span>
        </div>

        <h1 className="font-secondary text-4xl md:text-5xl">
          Step Into a New Era <br/> of Finance
        </h1>
        <p className="font-primary mt-3 text-sm sm:text-lg text-gray-300">
          Join thousands of users enjoying smarter banking, instant credit, and
          seamless payments all in one secure platform. Sign up in minutes and
          experience financial freedom like never before.
        </p>

        <div>
          <form className="flex flex-col mt-6 sm:flex-row gap-1 md:gap-4 max-w-xl sm:max-w-xl md:max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full flex-1 px-4 md:text-left text-center sm:px-6 py-3 sm:py-2 rounded-full bg-white bg-opacity-40 text-(--color-purpel) placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button type="submit" className="w-full md:text-sm sm:w-auto mt-2 sm:mt-0 px-4 sm:px-3 py-3 sm:py-2 rounded-full bg-(--color-purpel) text-white hover:shadow-lg transition transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" disabled={loading}>
              {loading ? "Submitting.." : "Join waitlist"}
            </button>
          </form>
          {responseMessage && <p className="pt-3">{responseMessage}</p>}
          {/* <input
            type="email"
            placeholder="Enter Email"
            className="w-full flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-[#9F7CE9] bg-opacity-40 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-(--color-purpel) hover:shadow-lg transition transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Join waitlist
          </button> */}
        </div>
      </div>
    </div>
  );
}
