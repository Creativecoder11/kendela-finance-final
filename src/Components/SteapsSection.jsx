import React from "react";

export default function SteapsSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Get Started in Minutes, Not Days
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/600/600"
              alt="Person smiling while using smartphone"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Steps */}
        <div className="w-full lg:w-1/2 space-y-10">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                1
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Quick Sign-Up</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Action:</span> Enter your email
                and create your account
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Time:</span> 30 seconds
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                2
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Smart Verification</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Action:</span> Verify your
                identity with secure, AI-powered authentication
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Time:</span> 2 minutes
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                3
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Account Activation</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Action:</span> Select your
                services and start using Kandela right away.
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Time:</span> 1 minute
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
