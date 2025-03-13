import React from "react";

export default function WhyChooseSection() {
  return (
    <section className="md:pb-20 pb-6 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-16 mt-6 md:mt-10">
        <p className="font-primary w-full max-w-35 m-auto text-sm rounded-full bg-[#F1ECFC] mb-2 py-3 px-3">
          Why Choose Us
        </p>
        <h1 className="font-secondary text-3xl md:text-[42px] lg:text-[56px] md:tracking-[-2px] tracking-[-1px] mb-4 md:mb-6">
          Why Trust Kandela Finance
        </h1>
        <p className="font-primary max-w-3xl mx-auto text-gray-600 text-lg md:text-lg">
          Building the future of banking with innovation, security, and your
          success in mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Smart Technology Card */}
        <div className="md:p-6 p-2 flex flex-col text-left">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M16.0013 10.1867C16.5378 8.82644 18.4628 8.82644 18.9993 10.1867L20.5175 14.0358C21.5002 16.5276 23.4725 18.5 25.9643 19.4827L29.8135 21.0008C31.1737 21.5373 31.1737 23.4623 29.8135 23.9988L25.9643 25.517C23.4725 26.4997 21.5002 28.472 20.5175 30.9638L18.9993 34.813C18.4628 36.1732 16.5378 36.1732 16.0013 34.813L14.4832 30.9638C13.5005 28.472 11.5281 26.4997 9.03633 25.517L5.18718 23.9988C3.82693 23.4623 3.82693 21.5373 5.18718 21.0008L9.03633 19.4827C11.5281 18.5 13.5005 16.5276 14.4832 14.0358L16.0013 10.1867Z"
                stroke="#101928"
                stroke-width="2.5"
              />
              <path
                d="M30.2708 4.54907C30.472 4.03898 31.194 4.03898 31.3952 4.54907L31.9643 5.9925C32.333 6.9269 33.0727 7.66657 34.007 8.03508L35.4505 8.60437C35.9605 8.80555 35.9605 9.52745 35.4505 9.72863L34.007 10.2979C33.0727 10.6664 32.333 11.4061 31.9643 12.3405L31.3952 13.7839C31.194 14.294 30.472 14.294 30.2708 13.7839L29.7017 12.3405C29.333 11.4061 28.5933 10.6664 27.659 10.2979L26.2155 9.72863C25.7055 9.52745 25.7055 8.80555 26.2155 8.60437L27.659 8.03508C28.5933 7.66657 29.333 6.9269 29.7017 5.9925L30.2708 4.54907Z"
                stroke="#101928"
                stroke-width="2.5"
              />
            </svg>
          </div>

          <h2 className="font-secondary lg:text-3xl md:text2xl text-2xl  text-(--color-purpel) mb-4">
            Smart Technology
            <br />
            That Works for You
          </h2>

          <p className="font-primary text-lg text-[#767676]">
            Kandela uses AI-powered tools to simplify financial decisions. From
            instant credit approvals to real-time budgeting insights, our smart
            technology helps you stay in control without the hassle.
          </p>
        </div>

        {/* Complete Financial Control Card */}
        <div className="md:p-6 p-2 flex flex-col text-left">
          <div className="mb-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 13.875V4.625"
                stroke="#101928"
                stroke-width="2.3125"
              />
              <path
                d="M32.5682 35.331C35.4383 34.4237 36.2792 28.9135 34.4463 23.0239C32.6134 17.134 28.801 13.095 25.9311 14.0023C24.1578 14.5629 24.0755 16.7452 22.6155 17.5411C22.2705 17.7292 21.7872 17.7292 20.8204 17.7292H19.1789C18.2121 17.7292 17.7288 17.7292 17.3838 17.5411C15.9239 16.7452 15.8414 14.5629 14.0683 14.0023C11.1983 13.095 7.38591 17.134 5.55305 23.0239C3.72022 28.9135 4.56101 34.4237 7.43102 35.331C9.52606 35.9933 12.1233 34.0199 14.0861 30.6149C15.3952 28.3437 15.988 27.75 18.6182 27.75H21.3811C24.0112 27.75 24.6041 28.3437 25.9132 30.6149C27.876 34.0199 30.4733 35.9933 32.5682 35.331Z"
                stroke="#101928"
                stroke-width="2.3125"
              />
              <path
                d="M18.333 21.667H21.6663"
                stroke="#101928"
                stroke-width="2.3125"
              />
            </svg>
          </div>

          <h2 className="font-secondary lg:text-3xl md:text2xl text-2xl  text-(--color-purpel) mb-4">
            Complete Financial
            <br />
            Control in One App
          </h2>

          <p className="font-primary text-lg text-[#767676]">
            Manage everything such payments, savings, loans, and transfers all
            in one place. No need for multiple apps or long wait times. Kandela
            puts your entire financial world at your fingertips.
          </p>
        </div>
        {/* Bank-Grade Security Card */}
        <div className="md:p-6 p-2 flex flex-col text-left">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M8.33301 26.6668L16.6663 21.6668M23.333 18.3335L31.6663 13.3335M19.9997 8.3335V16.6668M19.9997 23.3335V31.6668M8.33301 13.3335L16.6663 18.3335M23.333 21.6668L31.6663 26.6668"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M34.1663 15.0002V24.1668M22.4997 34.1668L31.6663 29.1668M7.49967 29.1668L17.4997 34.1668M5.83301 25.0002V15.0002M7.49967 10.8335L17.4997 5.8335M32.4997 10.8335L22.4997 5.8335"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M20 8.3335C21.3807 8.3335 22.5 7.21421 22.5 5.8335C22.5 4.45278 21.3807 3.3335 20 3.3335C18.6193 3.3335 17.5 4.45278 17.5 5.8335C17.5 7.21421 18.6193 8.3335 20 8.3335Z"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M20 36.6665C21.3807 36.6665 22.5 35.5472 22.5 34.1665C22.5 32.7858 21.3807 31.6665 20 31.6665C18.6193 31.6665 17.5 32.7858 17.5 34.1665C17.5 35.5472 18.6193 36.6665 20 36.6665Z"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M5.83301 15C7.21372 15 8.33301 13.8807 8.33301 12.5C8.33301 11.1193 7.21372 10 5.83301 10C4.4523 10 3.33301 11.1193 3.33301 12.5C3.33301 13.8807 4.4523 15 5.83301 15Z"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M34.167 15C35.5477 15 36.667 13.8807 36.667 12.5C36.667 11.1193 35.5477 10 34.167 10C32.7863 10 31.667 11.1193 31.667 12.5C31.667 13.8807 32.7863 15 34.167 15Z"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M34.167 30C35.5477 30 36.667 28.8807 36.667 27.5C36.667 26.1193 35.5477 25 34.167 25C32.7863 25 31.667 26.1193 31.667 27.5C31.667 28.8807 32.7863 30 34.167 30Z"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M5.83301 30C7.21372 30 8.33301 28.8807 8.33301 27.5C8.33301 26.1193 7.21372 25 5.83301 25C4.4523 25 3.33301 26.1193 3.33301 27.5C3.33301 28.8807 4.4523 30 5.83301 30Z"
                stroke="#101928"
                stroke-width="1.5"
              />
              <path
                d="M20.0003 16.25L23.3337 18.125V21.875L20.0003 23.75L16.667 21.875V18.125L20.0003 16.25Z"
                stroke="#101928"
                stroke-width="1.5"
              />
            </svg>
          </div>

          <h2 className="font-secondary lg:text-3xl md:text2xl text-2xl  text-(--color-purpel) mb-4">
          Bank-Grade Security 
            <br />
            You Can Trust
          </h2>

          <p className="font-primary text-lg text-[#767676]">
          Your data and money are protected with top-tier encryption, multi-factor authentication, and real-time fraud monitoring. With Kandela, security comes standard.
          </p>
        </div>
      </div>
    </section>
  );
}
