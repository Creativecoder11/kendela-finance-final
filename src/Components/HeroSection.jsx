import React, { useState, useEffect } from "react";
// import useSubmitEmail from "../Hook/EmailCollector";
import { usePopup } from "../Hook/PopupContext";
// import flyIcon from "../assets/Images/fly icon.svg";
import BGImageDesktop from "../assets/Images/Header Banner BG.webp";
import BGImageTablet from "../assets/Images/heademobiletabletbg.webp";
import BGImageMobile from "../assets/Images/heademobiletabletbg.webp";
import Avater1 from "../assets/Icon/Avater 1.svg";
import Avater2 from "../assets/Icon/Avater 2.svg";
import Avater3 from "../assets/Icon/Avater 3.svg";

const HeroSection = () => {
  // const { formData, loading, responseMessage, handleChange, handleSubmit } =
  //   useSubmitEmail();
  const { openPopup } = usePopup();
  const [backgroundImage, setBackgroundImage] = useState(BGImageDesktop);

  // Function to update background image based on window width
  const updateBackgroundImage = () => {
    if (window.innerWidth >= 1024) {
      setBackgroundImage(BGImageDesktop); // Desktop
    } else if (window.innerWidth >= 768) {
      setBackgroundImage(BGImageTablet); // Tablet
    } else {
      setBackgroundImage(BGImageMobile); // Mobile
    }
  };

  // Set background on initial load and add resize listener
  useEffect(() => {
    // Set initial background
    updateBackgroundImage();

    // Add event listener for window resize
    window.addEventListener('resize', updateBackgroundImage);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, []);

  return (
    <div
      className="herosection lg:-mt-24 md:-mt-28 -mt-28 md:pt-20 pt-20 lg:min-h-screen md:min-h-[680px] min-h-[660px] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden overflow-y-hiddenF"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
            <span className="text-(--color-purpel) ">Redefining financial freedom</span> — join the movement today.
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
        {/* <div>
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
        </div> */}

        <button
          onClick={openPopup}
          className="px-6 md:py-4 py-3 rounded-full bg-white text-(--color-purpel) cursor-pointer"
        >
          Join Our Waitlist
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

// import React, { useState, useEffect } from "react";
// import { usePopup } from "../Hook/PopupContext";
// import backgroundImage from "../assets/Images/Header Banner BG.webp";
// import Avater1 from "../assets/Icon/Avater 1.svg";
// import Avater2 from "../assets/Icon/Avater 2.svg";
// import Avater3 from "../assets/Icon/Avater 3.svg";

// const HeroSection = () => {
//   const { openPopup } = usePopup();
  
//   return (
//     <div
//       className=" lg:-mt-24 md:-mt-28 -mt-28 md:pt-20 pt-20 lg:min-h-screen md:min-h-[680px] min-h-[660px] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundColor: "#673AB7", // Fallback color in case image fails to load
//       }}
//     >
//       {/* Left side pie chart icon - Hidden on mobile, visible on larger screens */}
//       <div className="hidden lg:block landscape:md:max-lg:hidden landscape:lg:block absolute lg:left-[9%] lg:top-[24%] md:left-[4%] md:top-[10%] w-24 h-24 md:w-30 md:h-40 lg:w-68 lg:h-68 z-60 opacity-90">        
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           // width="210"
//           // height="260"
//           className="w-full h-auto"
//           viewBox="0 0 212 207"
//           fill="none"
//         >
//           <path
//             d="M62.1932 18.042L71.7635 8.17252L110.126 26.0751L187.491 80.4224L198.68 100.563L188.768 110.475C188.769 110.688 188.77 110.9 188.77 111.113H135.986C135.986 104.056 134.316 97.0998 131.113 90.8122C127.91 84.5246 123.264 79.0843 117.556 74.9358C111.848 70.7874 105.239 68.0486 98.2693 66.9434C91.2999 65.8381 84.1679 66.3978 77.4562 68.5766L61.1582 18.3716C61.5027 18.2598 61.8477 18.1499 62.1932 18.042Z"
//             fill="#8D63E5"
//           />
//           <path
//             d="M56.4334 15.424L66.0038 5.55457L104.367 23.4572L181.731 77.8044L192.921 97.9449L183.008 107.857C183.01 108.07 183.01 108.282 183.01 108.495H130.226C130.226 101.438 128.556 94.4818 125.353 88.1942C122.15 81.9067 117.504 76.4663 111.796 72.3179C106.088 68.1694 99.4789 65.4307 92.5096 64.3254C85.5402 63.2202 78.4081 63.7798 71.6965 65.9586L55.3984 15.7536C55.7429 15.6418 56.0879 15.5319 56.4334 15.424Z"
//             stroke="#101928"
//             stroke-width="1.80829"
//           />
//           <path
//             d="M212 100.883C212 85.4974 208.359 70.3305 201.375 56.6217C194.392 42.913 184.263 31.0514 171.817 22.0066C159.371 12.9618 144.962 6.99042 129.767 4.58065C114.571 2.17089 99.0216 3.3911 84.3881 8.14155L100.686 58.3465C107.398 56.1677 114.53 55.6081 121.499 56.7133C128.469 57.8186 135.078 60.5573 140.786 64.7058C146.494 68.8542 151.14 74.2946 154.343 80.5822C157.546 86.8697 159.216 93.8261 159.216 100.883H212Z"
//             fill="#D3C3F5"
//           />
//           <mask id="path-4-inside-1_1046_335" fill="white">
//             <path d="M206.24 98.2646C206.24 82.8794 202.599 67.7126 195.616 54.0038C188.632 40.295 178.503 28.4335 166.057 19.3886C153.612 10.3438 139.202 4.37247 124.007 1.9627C108.812 -0.447062 93.2618 0.773149 78.6284 5.5236L94.9264 55.7286C101.638 53.5498 108.77 52.9901 115.739 54.0954C122.709 55.2006 129.318 57.9394 135.026 62.0878C140.734 66.2363 145.38 71.6766 148.583 77.9642C151.786 84.2518 153.456 91.2081 153.456 98.2646H206.24Z" />
//           </mask>
//           <path
//             d="M206.24 98.2646C206.24 82.8794 202.599 67.7126 195.616 54.0038C188.632 40.295 178.503 28.4335 166.057 19.3886C153.612 10.3438 139.202 4.37247 124.007 1.9627C108.812 -0.447062 93.2618 0.773149 78.6284 5.5236L94.9264 55.7286C101.638 53.5498 108.77 52.9901 115.739 54.0954C122.709 55.2006 129.318 57.9394 135.026 62.0878C140.734 66.2363 145.38 71.6766 148.583 77.9642C151.786 84.2518 153.456 91.2081 153.456 98.2646H206.24Z"
//             stroke="#101928"
//             stroke-width="3.61658"
//             mask="url(#path-4-inside-1_1046_335)"
//           />
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M5.23279 80.0779C10.8614 61.6033 21.8496 45.2163 36.8039 32.995L70.2057 73.8665C63.3469 79.4719 58.3071 86.9878 55.7255 95.4613C53.144 103.935 53.1369 112.984 55.7052 121.461L5.18846 136.766C-0.411218 118.282 -0.395787 98.5525 5.23279 80.0779Z"
//             fill="#B5AB74"
//           />
//           <path
//             d="M36.8039 32.995L37.1539 32.7089L36.8679 32.3589L36.5178 32.6449L36.8039 32.995ZM5.23279 80.0779L4.80035 79.9461L5.23279 80.0779ZM70.2057 73.8665L70.4918 74.2166L70.8419 73.9305L70.5558 73.5805L70.2057 73.8665ZM55.7052 121.461L55.8363 121.894L56.2689 121.763L56.1379 121.33L55.7052 121.461ZM5.18846 136.766L4.75581 136.897L4.88688 137.33L5.31953 137.199L5.18846 136.766ZM36.5178 32.6449C21.4941 44.9229 10.455 61.3858 4.80035 79.9461L5.66524 80.2096C11.2677 61.8207 22.205 45.5097 37.09 33.345L36.5178 32.6449ZM70.5558 73.5805L37.1539 32.7089L36.4538 33.2811L69.8557 74.1526L70.5558 73.5805ZM56.158 95.593C58.7135 87.2052 63.7023 79.7653 70.4918 74.2166L69.9197 73.5165C62.9915 79.1785 57.9008 86.7704 55.2931 95.3295L56.158 95.593ZM56.1379 121.33C53.5955 112.939 53.6025 103.981 56.158 95.593L55.2931 95.3295C52.6854 103.889 52.6783 113.029 55.2726 121.593L56.1379 121.33ZM5.31953 137.199L55.8363 121.894L55.5741 121.029L5.05738 136.333L5.31953 137.199ZM4.80035 79.9461C-0.854331 98.5064 -0.869833 118.328 4.75581 136.897L5.62111 136.635C0.0473971 118.237 0.0627564 98.5986 5.66524 80.2096L4.80035 79.9461Z"
//             fill="#101928"
//           />
//           <mask id="path-7-inside-2_1046_335" fill="white">
//             <path d="M47.0334 22.7648C32.079 34.9861 21.0909 51.373 15.4623 69.8476C9.83371 88.3222 9.81827 108.052 15.418 126.536L65.9347 111.231C63.3664 102.754 63.3735 93.7045 65.955 85.231C68.5366 76.7576 73.5764 69.2417 80.4352 63.6363L47.0334 22.7648Z" />
//           </mask>
//           <path
//             d="M47.0334 22.7648C32.079 34.9861 21.0909 51.373 15.4623 69.8476C9.83371 88.3222 9.81827 108.052 15.418 126.536L65.9347 111.231C63.3664 102.754 63.3735 93.7045 65.955 85.231C68.5366 76.7576 73.5764 69.2417 80.4352 63.6363L47.0334 22.7648Z"
//             fill="#E8DB94"
//             stroke="#101928"
//             stroke-width="3.61658"
//             mask="url(#path-7-inside-2_1046_335)"
//           />
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M131.065 125.758L141.295 115.528L145.111 127.564L188.749 145.418C182.288 161.209 171.797 175.029 158.323 185.496C144.848 195.963 128.864 202.711 111.965 205.066C95.0663 207.422 77.8455 205.301 62.0228 198.918C46.2001 192.534 32.3296 182.11 21.7969 168.687L22.8988 167.822L32.3294 158.686L33.7223 159.329L63.3228 136.102C68.1536 142.258 74.5154 147.039 81.7725 149.967C89.0297 152.895 96.9281 153.868 104.679 152.788C112.429 151.707 119.761 148.612 125.941 143.812C129.136 141.329 131.966 138.435 134.364 135.218L124.991 140.783L126.909 133.75C127.868 132.258 130.042 128.571 131.065 125.758Z"
//             fill="#5A8383"
//           />
//           <path
//             d="M141.295 115.528L141.726 115.391L141.501 114.682L140.976 115.208L141.295 115.528ZM131.065 125.758L130.746 125.438L130.675 125.509L130.64 125.603L131.065 125.758ZM145.111 127.564L144.681 127.7L144.745 127.902L144.94 127.982L145.111 127.564ZM188.749 145.418L189.168 145.589L189.339 145.171L188.92 145L188.749 145.418ZM158.323 185.496L158.6 185.853L158.323 185.496ZM111.965 205.066L111.903 204.619L111.965 205.066ZM62.0228 198.918L61.8537 199.337L62.0228 198.918ZM21.7969 168.687L21.5178 168.331L21.1622 168.61L21.4412 168.966L21.7969 168.687ZM22.8988 167.822L23.1779 168.178L23.1964 168.163L23.2134 168.147L22.8988 167.822ZM32.3294 158.686L32.5189 158.276L32.2375 158.146L32.0149 158.361L32.3294 158.686ZM33.7223 159.329L33.5328 159.739L33.7839 159.855L34.0014 159.685L33.7223 159.329ZM63.3228 136.102L63.6784 135.823L63.3993 135.467L63.0437 135.746L63.3228 136.102ZM81.7725 149.967L81.6034 150.387V150.387L81.7725 149.967ZM104.679 152.788L104.616 152.34L104.679 152.788ZM125.941 143.812L126.218 144.169L125.941 143.812ZM134.364 135.218L134.727 135.488L134.133 134.829L134.364 135.218ZM124.991 140.783L124.555 140.664L124.261 141.743L125.222 141.172L124.991 140.783ZM126.909 133.75L126.529 133.506L126.491 133.564L126.473 133.631L126.909 133.75ZM140.976 115.208L130.746 125.438L131.385 126.077L141.615 115.847L140.976 115.208ZM145.542 127.427L141.726 115.391L140.864 115.664L144.681 127.7L145.542 127.427ZM144.94 127.982L188.578 145.836L188.92 145L145.283 127.145L144.94 127.982ZM188.331 145.247C181.9 160.965 171.457 174.72 158.045 185.139L158.6 185.853C172.136 175.337 182.677 161.454 189.168 145.589L188.331 145.247ZM158.045 185.139C144.634 195.557 128.723 202.274 111.903 204.619L112.027 205.514C129.004 203.148 145.063 196.369 158.6 185.853L158.045 185.139ZM111.903 204.619C95.0823 206.963 77.9413 204.853 62.192 198.498L61.8537 199.337C77.7497 205.75 95.0504 207.88 112.027 205.514L111.903 204.619ZM62.192 198.498C46.4426 192.144 32.6364 181.768 22.1525 168.408L21.4412 168.966C32.0228 182.451 45.9576 192.923 61.8537 199.337L62.192 198.498ZM22.0759 169.042L23.1779 168.178L22.6197 167.466L21.5178 168.331L22.0759 169.042ZM23.2134 168.147L32.644 159.011L32.0149 158.361L22.5843 167.497L23.2134 168.147ZM32.14 159.097L33.5328 159.739L33.9117 158.919L32.5189 158.276L32.14 159.097ZM34.0014 159.685L63.6018 136.458L63.0437 135.746L33.4432 158.973L34.0014 159.685ZM62.9671 136.381C67.8468 142.6 74.2729 147.429 81.6034 150.387L81.9417 149.548C74.7579 146.65 68.4604 141.917 63.6784 135.823L62.9671 136.381ZM81.6034 150.387C88.9339 153.344 96.9121 154.327 104.741 153.235L104.616 152.34C96.944 153.409 89.1255 152.447 81.9417 149.548L81.6034 150.387ZM104.741 153.235C112.57 152.144 119.976 149.018 126.218 144.169L125.663 143.455C119.546 148.207 112.289 151.271 104.616 152.34L104.741 153.235ZM126.218 144.169C129.446 141.661 132.305 138.738 134.727 135.488L134.002 134.948C131.628 138.133 128.827 140.997 125.663 143.455L126.218 144.169ZM125.222 141.172L134.595 135.607L134.133 134.829L124.76 140.395L125.222 141.172ZM126.473 133.631L124.555 140.664L125.427 140.902L127.345 133.869L126.473 133.631ZM130.64 125.603C129.635 128.368 127.484 132.02 126.529 133.506L127.29 133.995C128.253 132.496 130.449 128.775 131.49 125.912L130.64 125.603Z"
//             fill="#101928"
//           />
//           <mask id="path-10-inside-3_1046_335" fill="white">
//             <path d="M32.0263 158.457C42.559 171.88 56.4296 182.304 72.2522 188.688C88.0749 195.071 105.296 197.192 122.194 194.837C139.093 192.481 155.078 185.733 168.552 175.266C182.026 164.799 192.518 150.979 198.979 135.188L150.126 115.2C147.162 122.442 142.35 128.781 136.17 133.582C129.99 138.382 122.659 141.477 114.908 142.558C107.157 143.638 99.2591 142.665 92.002 139.737C84.7448 136.809 78.383 132.028 73.5522 125.872L32.0263 158.457Z" />
//           </mask>
//           <path
//             d="M32.0263 158.457C42.559 171.88 56.4296 182.304 72.2522 188.688C88.0749 195.071 105.296 197.192 122.194 194.837C139.093 192.481 155.078 185.733 168.552 175.266C182.026 164.799 192.518 150.979 198.979 135.188L150.126 115.2C147.162 122.442 142.35 128.781 136.17 133.582C129.99 138.382 122.659 141.477 114.908 142.558C107.157 143.638 99.2591 142.665 92.002 139.737C84.7448 136.809 78.383 132.028 73.5522 125.872L32.0263 158.457Z"
//             fill="#94D9D9"
//             stroke="#101928"
//             stroke-width="3.61658"
//             mask="url(#path-10-inside-3_1046_335)"
//           />
//         </svg>
//       </div>

//       {/* Main content section - Centered with appropriate padding on all devices */}
//       <div className="w-full max-w-4xl text-center text-white z-20 my-4 sm:my-8 px-4">
//         {/* User count badge - Smaller on mobile */}
//         <div className="inline-flex items-center bg-white text-gray-800 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm">
//           <div className="flex mr-1 sm:mr-2">
//             <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-[#9F7CE9]">
//               <img className="rounded-full" src={Avater1} alt="avater1" />
//             </div>
//             <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-[#9F7CE9] -ml-2">
//               <img className="rounded-full" src={Avater2} alt="avater2" />
//             </div>
//             <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 border-2 border-[#9F7CE9] -ml-2">
//               <img className="rounded-full" src={Avater3} alt="avater3" />
//             </div>
//           </div>
//           <span className="font-primary md:text-sm text-[12px]">
//             <span className="text-(--color-purpel)">
//               Redefining financial freedom
//             </span>{" "}
//             — join the movement today.
//           </span>
//         </div>

//         {/* Heading - Responsive text sizing */}
//         <h1 className="font-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
//           Finance on Your Own Terms
//         </h1>

//         {/* Subheading - Adjusted text size for readability on all devices */}
//         <p className="font-primary text-base text-[#DCCFF7] sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
//           With Kandela, you get more than just a digital wallet. Enjoy
//           AI-powered credit, flexible Buy Now, Pay Later, multi-currency
//           wallets, secure virtual cards, and seamless bill payments, all in one
//           powerful platform.
//         </p>

//         {/* Sign up button - Using the popup from the second component */}
//         <button
//           onClick={openPopup}
//           className="px-6 md:py-4 py-3 rounded-full bg-white text-(--color-purpel) hover:shadow-lg transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
//         >
//           Join Our Waitlist
//         </button>
//       </div>

//       {/* Right side paper plane graphics - Hidden on mobile, visible and scaled on larger screens */}
//       <div className="hidden lg:block landscape:hidden landscape:lg:block absolute lg:-right-[30%] lg:top-[40%] md:-right-[22%] md:top-[36%] w-32 h-32 md:w-110 md:h-110 lg:w-260 lg:h-200 z-10 opacity-90">
//         <svg
//           // width="1264"
//           // height="830"
//           className="w-full h-auto"
//           viewBox="0 0 864 658"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M356.979 164.33C380.664 185.546 422.346 220.539 463.281 243.465"
//             stroke="#DCCFF7"
//             stroke-width="2.0367"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-dasharray="4.07 8.15"
//           />
//           <path
//             d="M337.22 146.099C337.22 146.099 344.675 153.398 356.958 164.408"
//             stroke="#2E353A"
//             stroke-width="2.0367"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-dasharray="4.07 8.15"
//           />
//           <path
//             d="M327.554 142.743L359.729 101.196L226.164 28.2612L327.554 142.743Z"
//             fill="#DCCFF7"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M348.122 104.172L327.554 142.743L226.164 28.2612L348.122 104.172Z"
//             fill="#8D63E5"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M348.122 104.172L320.587 117.404L226.164 28.2612L348.122 104.172Z"
//             fill="#DCCFF7"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M359.729 101.196L381.846 98.407L226.164 28.2612L359.729 101.196Z"
//             fill="#DCCFF7"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M301.747 128.064L305.616 132.131"
//             stroke="#2E353A"
//             stroke-width="2.0367"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M280.64 105.87L293.599 119.485"
//             stroke="#2E353A"
//             stroke-width="2.0367"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M233.299 213.565L246.829 162.811L385.804 224.857L233.299 213.565Z"
//             fill="#DCCFF7"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M251.499 173.836L233.299 213.565L385.804 224.857L251.499 173.836Z"
//             fill="#8D63E5"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M251.499 173.836L257.669 203.747L385.804 224.857L251.499 173.836Z"
//             fill="#DCCFF7"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M246.829 162.811L235.657 143.519L385.804 224.857L246.829 162.811Z"
//             fill="#DCCFF7"
//             stroke="#2E353A"
//             stroke-width="2.57215"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M285.544 226.481L298.821 227.28"
//             stroke="#2E353A"
//             stroke-width="2.0367"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M238.908 223.681L272.288 225.687"
//             stroke="#2E353A"
//             stroke-width="2.0367"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M216.637 205.772C216.637 205.772 97.2486 195.025 48.3211 291.589C-0.606292 388.153 111.963 424.484 144.758 380.531C177.553 336.578 96.2077 293.815 63.9373 335.8C31.6669 377.786 69.1973 474.211 148.835 499.656C215.013 520.796 423.859 492.64 546.049 504.029C546.049 504.029 639.029 503.142 771.451 544.07"
//             stroke="#F1ECFC"
//             stroke-width="2.0367"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-dasharray="4.07 8.15"
//           />
//         </svg>
//       </div>

//       {/* Bottom left money bills graphic - Hidden on mobile, visible and scaled on larger screens */}
//       <div className="hidden lg:block landscape:hidden landscape:lg:block absolute lg:left-[24%] lg:bottom-[8%] md:left-[20%] md:bottom-[50%] w-24 h-24 md:w-24 md:h-24 lg:w-36 lg:h-36 z-10 opacity-90">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           // width="132"
//           // height="138"
//           className="w-full h-auto"
//           viewBox="0 0 112 138"
//           fill="none"
//         >
//           <path
//             d="M20 9C28.8 44.2 10.3333 74 0 84.5H48.5C71.3 64.9 74.3333 26 73 9H20Z"
//             fill="#0F973D"
//           />
//           <path
//             d="M28 1C36.8 36.2 18.3333 66 8 76.5H56.5C79.3 56.9 82.3333 18 81 1H28Z"
//             fill="#0F973D"
//             stroke="#101928"
//             stroke-width="2"
//           />
//           <path
//             d="M18.5 102.5C41.7 84.5 52.1667 50.3333 54.5 35.5L102.5 52.5C94.5 86.1 67.1667 107.5 54.5 114L18.5 102.5Z"
//             fill="#0F973D"
//           />
//           <path
//             d="M26.5 94.5C49.7 76.5 60.1667 42.3333 62.5 27.5L110.5 44.5C102.5 78.1 75.1667 99.5 62.5 106L26.5 94.5Z"
//             fill="#0F973D"
//             stroke="#101928"
//             stroke-width="2"
//           />
//           <path
//             d="M32.5 120C48.9 116.8 62.3333 88.3333 67 74.5L96 92C90.4 121.6 71.3333 135 62.5 138L32.5 120Z"
//             fill="#0F973D"
//           />
//           <path
//             d="M40.5 112C56.9 108.8 70.3333 80.3333 75 66.5L104 84C98.4 113.6 79.3333 127 70.5 130L40.5 112Z"
//             fill="#0F973D"
//             stroke="#101928"
//             stroke-width="2"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
