import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded transform rotate-45 mr-2"></div>
              <span className="text-2xl font-semibold">Kandela</span>
            </div>
            <p className="text-gray-300 mb-4">
              Join thousands of users already experiencing the future of banking with 
              Kandela Finance. Get early access to our complete suite of financial tools.
            </p>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Flexi Splits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Digital Wallets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Virtual Cards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Savings Accounts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Business Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Bill Payments</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources and Social */}
          <div className="col-span-1 grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">IMS Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Security Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-indigo-800 pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">Copyright © 2024, Kandela Finance</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms and Condition</a>
            <a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 text-sm text-gray-400">
          <p className="mb-4">
            Kandela Finance is a fintech platform providing digital financial solutions, including multi-currency wallets, virtual cards, and flexible payment options. While we strive to offer a seamless banking experience, Kandela Finance is not a licensed bank and does not currently hold a banking license from the Central Bank of Nigeria (CBN). Our services are powered by regulated financial partners where applicable, ensuring compliance and security for our users.
          </p>
          <p>
            When accessing third-party services (such as bill payments, subscriptions, and external transfers), users are subject to the terms and policies of those service providers. Kandela Finance is not responsible for the privacy or security practices of third parties. For detailed information on how we protect your data and facilitate transactions, please refer to our Privacy Policy and Terms & Conditions.
          </p>
        </div>
      </div>
    </footer>
  )
}
