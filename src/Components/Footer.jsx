import React, { useEffect } from "react";
import logo from "../assets/Images/Kandela Logo.svg";

export default function Footer() {

  useEffect(() => {
    // You can add a smooth scroll behavior on page load or when a specific condition is met.
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Clean up on unmount (if needed)
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <footer className="font-primary bg-[#2F195D] text-white py-21 px-4 md:px-6 lg:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex md:flex-row flex-col gap-8 mb-12">
          {/* Logo and Description */}
          <div className="flex-[40%]">
            <div className="flex items-center mb-4">
              <img src={logo} alt="" srcset="" />
            </div>
            <p className="text-gray-400 mb-4">
              Join thousands of users already experiencing the future of banking
              with Kandela Finance. Get early access to our complete suite of
              financial tools.
            </p>
          </div>

          {/* Products */}
          <div className="flex-[20%]">
            <h3 className="text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#flexiSplits" className="text-gray-400 hover:text-white">
                  Flexi Splits
                </a>
              </li>
              <li>
                <a href="#digitalWallets" className="text-gray-400 hover:text-white">
                  Digital Wallets
                </a>
              </li>
              <li>
                <a href="#ai-credit" className="text-gray-400 hover:text-white">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#virtualCards" className="text-gray-400 hover:text-white">
                  Virtual Cards
                </a>
              </li>
              <li>
                <a href="#savingsAccounts" className="text-gray-400 hover:text-white">
                  Savings Accounts
                </a>
              </li>
              <li>
                <a href="#billPayments" className="text-gray-400 hover:text-white">
                  Bill Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex-[18%]">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400 hover:text-white">
                  About Us
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">
                  Careers
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">
                  Press
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white">
                  Contact
                </p>
              </li>
            </ul>
          </div>

          {/* Resources*/}
          <div className="flex-[20%]">
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-gray-400 hover:text-white">
                    Blog
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 hover:text-white">
                    IMS Policy
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 hover:text-white">
                    Security Center
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/*  Social */}
          <div className="flex-[20%]">
            <h3 className="text-lg font-medium mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/company/kandela-finance" className="text-gray-400 underline hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kandelafinance?igsh=ejUwM3NpM3EzaXA1" className="text-gray-400 underline hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <p className="text-gray-400 underline hover:text-white">
                  Twitter
                </p>
              </li>
              <li>
                <p className="text-gray-400 underline hover:text-white">
                  Facebook
                </p>
              </li>
              <li>
                <p className="text-gray-400 underline hover:text-white">
                  Youtube
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className=" py-8 flex flex-col-reverse md:flex-row justify-between">
          <div className="mb-4 mt-6 md:mt-0 md:mb-0">
            <p className="text-gray-400">Copyright © 2025, Kandela Finance</p>
          </div>
          <div className="flex flex-wrap md:gap-6 gap-3">
            <p className="text-gray-400 hover:text-white">
              Privacy Policy
            </p>
            <p className="text-gray-400 hover:text-white">
              Terms and Condition
            </p>
            <p className="text-gray-400 hover:text-white">
              Cookie Policy
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-sm text-gray-400">
          <p className="mb-4">
            Kandela Finance is a fintech platform providing digital financial
            solutions, including multi-currency wallets, virtual cards, and
            flexible payment options. While we strive to offer a seamless
            banking experience, Kandela Finance is not a licensed bank and does
            not currently hold a banking license from the Central Bank of
            Nigeria (CBN). Our services are powered by regulated financial
            partners where applicable, ensuring compliance and security for our
            users.
          </p>
          <p>
            When accessing third-party services (such as bill payments,
            subscriptions, and external transfers), users are subject to the
            terms and policies of those service providers. Kandela Finance is
            not responsible for the privacy or security practices of third
            parties. For detailed information on how we protect your data and
            facilitate transactions, please refer to our Privacy Policy and
            Terms & Conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
