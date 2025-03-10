import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Kandela different from traditional banks?",
      answer:
        "Kandela is a fully digital financial platform designed for convenience, flexibility, and accessibility. Unlike traditional banks, we offer AI-powered credit assessments, multi-currency wallets, instant virtual cards, and Buy Now, Pay Later options all in one seamless app.",
    },
    {
      question: "How does Kandela's AI-powered credit work?",
      answer:
        "Our AI-powered credit system analyzes various financial data points to assess creditworthiness quickly and fairly. This includes transaction history, income patterns, and spending habits to provide personalized credit offers without the lengthy processes of traditional banks.",
    },
    {
      question: "Is my money safe with Kandela?",
      answer:
        "Yes, your funds are fully secured with bank-grade encryption and protection. We implement multiple security measures including two-factor authentication, biometric verification, and real-time fraud monitoring to ensure your financial information remains safe.",
    },
    {
      question: "Can I use Kandela outside of Nigeria?",
      answer:
        "Yes, Kandela is designed for global use with our multi-currency wallets supporting transactions in major currencies. You can use your Kandela virtual cards for international online purchases and withdrawals at compatible ATMs worldwide.",
    },
    {
      question: "How do I get started with Kandela?",
      answer:
        "Getting started is simple. Download the Kandela app from your app store, complete the quick registration process with your phone number and email, verify your identity with a valid ID, and link a funding source to begin enjoying our digital banking services.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:py-20 py-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-secondary text-center text-3xl md:text-[56px] md:tracking-[-2px] tracking-[-1px] mb-2 md:mb-6">
          Frequently Asked Questions
        </h1>
        <div className="mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 py-6 md:px-10 px-5 transition-colors duration-300 ${
                openIndex === index ? "bg-[#F8F8F8] border-none rounded-3xl" : "bg-white"
              }`}
            >
              <button
                className="flex w-full justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className={`font-secondary text-xl md:text-2xl font-medium transition-colors duration-300 ${
                    openIndex === index ? "text-purple-500" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </h3>
                <span
                  className={`ml-6 text-lg flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown
                    className={`h-6 w-6 ${
                      openIndex === index ? "text-purple-500" : "text-gray-400"
                    }`}
                  />
                </span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-3 pr-12 pb-2">
                  <p className="font-primary text-lg text-gray-500">{faq.answer}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
