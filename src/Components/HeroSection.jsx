import React from "react";
import useSubmitEmail from "../Hook/EmailCollector"
import flyIcon from "../assets/Images/fly icon.svg";
import BGImage from "../assets/Images/Header Banner BG.webp";
import Avater1 from "../assets/Icon/Avater 1.svg";
import Avater2 from "../assets/Icon/Avater 2.svg";
import Avater3 from "../assets/Icon/Avater 3.svg";

const HeroSection = () => {
  const { formData, loading, responseMessage, handleChange, handleSubmit } =
    useSubmitEmail();

  return (
    <div
      className="herosection md:-mt-26 -mt-23 md:pt-20 pt-20 md:min-h-screen min-h-[620px] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden overflow-y-hiddenF"
      style={{ 
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "cover",
       }}
    >
      {/* Main content section - Centered with appropriate padding on all devices */}
      <div className="w-full max-w-4xl text-center text-white z-20 my-4 sm:my-8 px-4">
        {/* User count badge - Smaller on mobile */}
        <div className="inline-flex items-center bg-white text-gray-800 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm">
          <div className="flex mr-1 sm:mr-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-[#9F7CE9]">
              <img
                className="rounded-full"
                src={Avater1}
                alt="avater1"
                srcset=""
              />
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-[#9F7CE9] -ml-2">
              <img
                className="rounded-full"
                src={Avater2}
                alt="avater1"
                srcset=""
              />
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-[#9F7CE9] -ml-2">
              <img
                className="rounded-full"
                src={Avater3}
                alt="avater1"
                srcset=""
              />
            </div>
          </div>
          <span className="font-primary md:text-sm text-[12px]">
            {" "}
            <span className="text-(--color-purpel) ">Join 4,063+</span> users
            building their financial freedom
          </span>
        </div>

        {/* Heading - Responsive text sizing */}
        <h1 className="font-secondary text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Finance on Your Own Terms
        </h1>

        {/* Subheading - Adjusted text size for readability on all devices */}
        <p className="font-primary text-base text-[#DCCFF7] sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
          With Kandela, you get more than just a digital wallet. Enjoy
          AI-powered credit, flexible Buy Now, Pay Later, multi-currency
          wallets, secure virtual cards, and seamless bill payments, all in one
          powerful platform.
        </p>

        {/* Sign up form - Stacked on mobile, side by side on larger screens */}
        <div>
          <form className="flex flex-col sm:flex-row gap-1 md:gap-4 max-w-xl sm:max-w-xl md:max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full flex-1 px-4 md:text-left text-center sm:px-6 py-3 sm:py-4 rounded-full bg-[#9F7CE9] bg-opacity-40 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-(--color-purpel) hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" disabled={loading}>
              {loading ? "Submitting.." : "Join waitlist"}
            </button>
          </form>
          {responseMessage && <p className="pt-6">{responseMessage}</p>}
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
};

export default HeroSection;


