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
      question: "⁠How does Kandela’s AI-powered credit work?",
      answer:
        "Our AI-driven system analyzes your transaction history and financial behavior to assess your creditworthiness in real-time. This allows us to provide fair, personalized loan offers without requiring collateral or a lengthy approval process.",
    },
    {
      question: "Is my money safe with Kandela?",
      answer:
        "Absolutely. We use bank-grade security, including encryption, multi-factor authentication, and fraud monitoring, to protect your funds and personal data. Your security is our top priority.",
    },
    {
      question: "Can I use Kandela outside of Nigeria?",
      answer:
        "Yes! With our multi-currency digital wallet, you can hold, send, and receive money in different currencies. You can also use Kandela’s virtual and physical cards for international transactions.",
    },
    {
      question: "How do I get started with Kandela?",
      answer:
        "Signing up is quick and easy. Enter your email, verify your identity, and activate your account all in just a few minutes. Once you’re set up, you can start managing your finances with ease.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="md:py-20 py-0 px-5 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-secondary text-center text-3xl md:text-[42px] lg:md:text-[56px] md:tracking-[-2px] tracking-[-1px] mb-2 md:mb-6">
          Frequently Asked Questions
        </h1>
        <div className="mt-12 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 py-6 md:px-10 px-5 transition-colors duration-300 ${
                openIndex === index ? "bg-[#F8F8F8] border-none rounded-3xl mt-3" : "bg-white"
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
