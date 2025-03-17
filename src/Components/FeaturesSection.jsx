import React from "react";
import flexImage from "../assets/Images/flex-upscale.svg";
import currencyImage from "../assets/Images/Multi -Currency 1.svg";
import aiPowered from "../assets/Images/Ai Powered.svg";
import cardImage from "../assets/Images/cards.svg";
import savings from "../assets/Images/saving.svg";
import billPaymentImage from "../assets/Images/bill payment.svg";

export default function FeaturesSection() {
  return (
    <div id="features" className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16 mt-6 md:mt-10">
        <p className="font-primary w-full max-w-30 m-auto text-sm rounded-full bg-[#F1ECFC] mb-2 py-3 px-3">
          Our Features
        </p>
        <h1 className="font-secondary text-3xl md:text-[42px] lg:text-[56px] md:tracking-[-2px] tracking-[-1px] mb-4 md:mb-6">
          Everything You Need, in One Platform
        </h1>
        <p className="font-primary max-w-3xl mx-auto text-gray-600 text-lg">
          Take full control of your finances with Kandela's all-in-one digital
          banking experience. From secure transactions to flexible credit
          options, we provide the tools to manage, grow, and simplify your money
          effectively.
        </p>
      </div>

      {/* Flex Pay Section */}
      <div
        id="flexiSplits"
        className="flex flex-col md:flex-row items-center mb-10 md:mb-40 md:pt-20 md:gap-8"
      >
        <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-center">
          <img
            src={flexImage}
            alt="Shopping cart illustration"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 mt-0 p-0 md:p-10">
          <p className="font-primary text-lg text-(--color-purpel) mb-2">
            Kandela Flexi Splits
          </p>
          <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4">
            Pay Your Way, On Your Terms
          </h2>
          <p className="font-primary text-[#767676] text-xl md:text-xl lg:text-2xl">
            Split any purchase into manageable installments with zero hidden
            fees. Get what you need today and pay later with flexible,
            customizable plans that fit your budget.
          </p>
        </div>
      </div>

      {/* Multi-Currency Section */}
      <div
        id="digitalWallets"
        className="flex flex-col md:flex-row-reverse items-center mb-10 md:mb-40 md:gap-8"
      >
        <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-center">
          <img
            src={currencyImage}
            alt="Currency conversion app"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 mt-0 p-0 md:p-10 ">
          <p className="font-primary text-lg text-(--color-purpel) mb-2">
            Multi-Currency Wallet
          </p>
          <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4">
            Spend Globally, Bank Locally
          </h2>
          <p className="font-primary text-[#767676] text-xl md:text-xl lg:text-2xl">
            Hold, convert, and send money in multiple currencies with real-time
            exchange rates. If you're shopping online or sending funds abroad,
            seamless transactions are just a tap away.
          </p>
        </div>
      </div>

      {/* Credit Score Section */}
      <div
        id="ai-credit"
        className="flex flex-col md:flex-row items-center mb-16 md:mb-40 md:gap-8"
      >
        <div className="w-full md:w-1/2 p-4 md:p-0 md:mb-0 mb-4 flex justify-center">
          <img
            src={aiPowered}
            alt="Credit score dashboard"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 mt-0 p-0 md:p-10 ">
          <p className="font-primary text-lg text-(--color-purpel) mb-2">
            AI-Powered Credit
          </p>
          <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4">
            Smarter Lending, Instant Access
          </h2>
          <p className="font-primary text-[#767676] text-xl md:text-xl lg:text-2xl">
            Get access to fair and personalized loans based on real financial
            behavior, no lengthy approvals, no unnecessary paperwork.
          </p>
        </div>
      </div>

      {/* Secure Payments Section */}
      <div
        id="virtualCards"
        className="flex flex-col md:flex-row-reverse items-center mb-10 md:mb-40 md:gap-8"
      >
        <div className="w-full md:w-1/2 p-4 md:p-0 mb-5 md:mb-0 flex justify-center">
          <img
            src={cardImage}
            alt="Payment cards"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 mt-0 p-0 md:p-10 ">
          <p className="font-primary text-lg text-(--color-purpel) mb-2">
            Virtual & Physical Cards
          </p>
          <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4">
            Secure Payments, Anytime, Anywhere
          </h2>
          <p className="font-primary text-[#767676] text-xl md:text-xl lg:text-2xl">
            Shop online safely with instant virtual cards or use a physical
            Kandela card for everyday purchases.
          </p>
        </div>
      </div>

      {/* High-Yield Savings Section */}
      <div
        id="savingsAccounts"
        className="flex flex-col md:flex-row items-center mb-10 md:mb-24 md:gap-8"
      >
        <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-center">
          <img
            src={savings}
            alt="Piggy bank savings illustration"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 mt-0 p-0 md:p-10 ">
          <p className="font-primary text-lg text-(--color-purpel) mb-2">
            High-Yield Savings
          </p>
          <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4">
            Grow Your Money While You Sleep
          </h2>
          <p className="font-primary text-[#767676] text-xl md:text-xl lg:text-2xl">
            Earn competitive interest on your savings while keeping your funds
            easily accessible. Your financial goals, within reach.
          </p>
        </div>
      </div>

      {/* Seamless Transactions Section */}
      <div
        id="billPayments"
        className="flex flex-col md:flex-row-reverse items-center mb-10 md:mb-24 md:gap-8"
      >
        <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-center">
          <img
            src={billPaymentImage}
            alt="Bill payment app"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 mt-0 p-0 md:p-10 ">
          <p className="font-primary text-lg text-(--color-purpel) mb-2">
            Instant Transfers & Bill Payments
          </p>
          <h2 className="font-secondary text-3xl md:text-4xl lg:text-5xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4">
            Seamless Transactions, No Hassle
          </h2>
          <p className="font-primary text-[#767676] text-xl md:text-xl lg:text-2xl">
            Send and receive money instantly, pay for utilities, and manage
            subscriptions, all from one secure app.
          </p>
        </div>
      </div>
    </div>
  );
}
