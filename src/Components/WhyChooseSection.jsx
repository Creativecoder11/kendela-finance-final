import React from "react";

export default function WhyChooseSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
          Why Choose Us
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Why Trust Kandela Finance
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Building the future of banking with innovation, security, and your
          success in mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Smart Technology Card */}
        <div className="p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-6 text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Smart Technology
            <br />
            That Works for You
          </h2>

          <p className="text-gray-600">
            Kandela uses AI-powered tools to simplify financial decisions. From
            instant credit approvals to real-time budgeting insights, our smart
            technology helps you stay in control without the hassle.
          </p>
        </div>

        {/* Complete Financial Control Card */}
        <div className="p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-6 text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Complete Financial
            <br />
            Control in One App
          </h2>

          <p className="text-gray-600">
            Manage everything such payments, savings, loans, and transfers all
            in one place. No need for multiple apps or long wait times. Kandela
            puts your entire financial world at your fingertips.
          </p>
        </div>

        {/* Bank-Grade Security Card */}
        <div className="p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-6 text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1.5l7.5 4.5v6c0 3.314-2.686 6-6 6s-6-2.686-6-6v-6l7.5-4.5z"></path>
              <path d="M12 4.5l4.5 2.7v3.6c0 1.989-1.611 3.6-3.6 3.6s-3.6-1.611-3.6-3.6v-3.6l4.5-2.7z"></path>
              <path d="M12 7.5l1.5 0.9v1.8c0 0.663-0.537 1.2-1.2 1.2s-1.2-0.537-1.2-1.2v-1.8l1.5-0.9z"></path>
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Bank-Grade Security
            <br />
            You Can Trust
          </h2>

          <p className="text-gray-600">
            Your data and money are protected with top-tier encryption,
            multi-factor authentication, and real-time fraud monitoring. With
            Kandela, security comes standard.
          </p>
        </div>
      </div>
    </section>
  );
}
