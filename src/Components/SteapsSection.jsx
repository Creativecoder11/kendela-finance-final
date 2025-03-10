import React from "react";
import StockImage from "../assets/Images/get start image.svg";
import number1 from "../assets/Icon/number1.svg";
import number2 from "../assets/Icon/number2.svg";
import number3 from "../assets/Icon/number3.svg";

export default function SteapsSection() {
  return (
    <section id="how-works" className="md:py-20 py-12 px-6 max-w-6xl mx-auto">
      <h1 className="font-secondary text-center text-3xl md:text-[56px] md:tracking-[-2px] tracking-[-1px] mb-0 md:mb-6">
        Get Started in Minutes, Not Days
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 py-15">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 ">
          <div className="rounded-lg overflow-hidden">
            <img
              src={StockImage}
              alt="Person smiling while using smartphone"
              className="w-full md:h-[620px] object-cover"
            />
          </div>
        </div>

        {/* Right side - Steps */}
        <div className="w-full lg:w-1/2 space-y-6 md:pl-10">
          {/* Step 1 */}

          <div>
            <img className="mb-4 md:h-auto h-14" src={number1} alt="" srcset="" />
            <h3 className="md:text-2xl text-2xl font-secondary font-bold mb-2">Quick Sign-Up</h3>
            <p className="text-[#6C737F] font-primary">
              <span className="font-medium">Action:</span> Enter your email and
              create your account
            </p>
            <p className="text-[#6C737F] font-primary">
              <span className="font-medium">Time:</span> 30 seconds
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <img className="mb-4 md:h-auto h-14" src={number2} alt="" srcset="" />
            <h3 className="md:text-2xl text-2xl font-secondary font-bold mb-2">Smart Verification</h3>
            <p className="text-[#6C737F] font-primary">
              <span className="font-medium">Action:</span> Verify your identity with secure, AI-powered authentication
            </p>
            <p className="text-[#6C737F] font-primary">
              <span className="font-medium">Time:</span> 2 minutes
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <img className="mb-4 md:h-auto h-14" src={number3} alt="" srcset="" />
            <h3 className="md:text-2xl text-2xl font-secondary font-bold mb-2">Account Activation</h3>
            <p className="text-[#6C737F] mb">
              <span className="font-medium font-primary">Action:</span> Select your services and start using Kandela right away. 
            </p>
            <p className="text-[#6C737F]">
              <span className="font-medium font-primary">Time:</span> 1 minute
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
