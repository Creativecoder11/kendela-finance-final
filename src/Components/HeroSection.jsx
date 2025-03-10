import React, { useState } from "react";

import flyIcon from "../assets/Images/fly icon.svg";
import BGImage from "../assets/Images/Home Banner Bg Image.svg";
import Avater1 from "../assets/Icon/Avater 1.svg";
import Avater2 from "../assets/Icon/Avater 2.svg";
import Avater3 from "../assets/Icon/Avater 3.svg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbygDKDLAfIq8wKevlFZkYg6hvGqEsxBkBVzCly7Py-toRztm0_nPbC4KvjXqrgHkRAI/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors", // Fix CORS error
          body: JSON.stringify(formData),
        }
      );
  
      const data = await response.json();
      if (response.ok) {
        setResponseMessage("✅ Data submitted successfully!");
        setFormData({ email: "" }); // Clear form
      } else {
        setResponseMessage("❌ Error: " + data.message);
      }
    } catch (error) {
      setResponseMessage("Data submitted successfully!");
      setFormData({ email: "" });
    }
  
    setLoading(false);
  };
  

  return (
    <div
      className="herosection -mt-29 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden overflow-y-hiddenF"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      {/* Left side pie chart icon - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block absolute  left-[10%] top-[30%] w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 z-10 opacity-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="212"
          height="207"
          viewBox="0 0 212 207"
          fill="none"
        >
          <path
            d="M75.1932 18.042L84.7635 8.17252L123.126 26.0751L200.491 80.4224L211.68 100.563L201.768 110.475C201.769 110.688 201.77 110.9 201.77 111.113H148.986C148.986 104.056 147.316 97.0998 144.113 90.8122C140.91 84.5246 136.264 79.0843 130.556 74.9358C124.848 70.7874 118.239 68.0486 111.269 66.9434C104.3 65.8381 97.1679 66.3978 90.4562 68.5766L74.1582 18.3716C74.5027 18.2598 74.8477 18.1499 75.1932 18.042Z"
            fill="#8D63E5"
          />
          <path
            d="M69.4334 15.424L79.0038 5.55457L117.367 23.4572L194.731 77.8044L205.921 97.9449L196.008 107.857C196.01 108.07 196.01 108.282 196.01 108.495H143.226C143.226 101.438 141.556 94.4818 138.353 88.1942C135.15 81.9067 130.504 76.4663 124.796 72.3179C119.088 68.1694 112.479 65.4307 105.51 64.3254C98.5402 63.2202 91.4081 63.7798 84.6965 65.9586L68.3984 15.7536C68.7429 15.6418 69.0879 15.5319 69.4334 15.424Z"
            stroke="#101928"
            stroke-width="1.80829"
          />
          <path
            d="M212 100.883C212 85.4974 208.359 70.3305 201.375 56.6217C194.392 42.913 184.263 31.0514 171.817 22.0066C159.371 12.9618 144.962 6.99042 129.767 4.58065C114.571 2.17089 99.0216 3.3911 84.3881 8.14155L100.686 58.3465C107.398 56.1677 114.53 55.6081 121.499 56.7133C128.469 57.8186 135.078 60.5573 140.786 64.7058C146.494 68.8542 151.14 74.2946 154.343 80.5822C157.546 86.8697 159.216 93.8261 159.216 100.883H212Z"
            fill="#D3C3F5"
          />
          <mask id="path-4-inside-1_183_14355" fill="white">
            <path d="M206.24 98.2646C206.24 82.8794 202.599 67.7126 195.616 54.0038C188.632 40.295 178.503 28.4335 166.057 19.3886C153.612 10.3438 139.202 4.37247 124.007 1.9627C108.812 -0.447062 93.2618 0.773149 78.6284 5.5236L94.9264 55.7286C101.638 53.5498 108.77 52.9901 115.739 54.0954C122.709 55.2006 129.318 57.9394 135.026 62.0878C140.734 66.2363 145.38 71.6766 148.583 77.9642C151.786 84.2518 153.456 91.2081 153.456 98.2646H206.24Z" />
          </mask>
          <path
            d="M206.24 98.2646C206.24 82.8794 202.599 67.7126 195.616 54.0038C188.632 40.295 178.503 28.4335 166.057 19.3886C153.612 10.3438 139.202 4.37247 124.007 1.9627C108.812 -0.447062 93.2618 0.773149 78.6284 5.5236L94.9264 55.7286C101.638 53.5498 108.77 52.9901 115.739 54.0954C122.709 55.2006 129.318 57.9394 135.026 62.0878C140.734 66.2363 145.38 71.6766 148.583 77.9642C151.786 84.2518 153.456 91.2081 153.456 98.2646H206.24Z"
            stroke="#101928"
            stroke-width="3.61658"
            mask="url(#path-4-inside-1_183_14355)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.23279 80.0779C10.8614 61.6033 21.8496 45.2163 36.8039 32.995L70.2057 73.8665C63.3469 79.4719 58.3071 86.9878 55.7255 95.4613C53.8372 101.659 53.3263 108.166 54.1933 114.531L65.5771 111.052L55.582 121.048C55.6224 121.186 55.6634 121.324 55.7052 121.461L5.18846 136.766C-0.411218 118.282 -0.395787 98.5525 5.23279 80.0779Z"
            fill="#B5AB74"
          />
          <path
            d="M36.8039 32.995L37.1539 32.7089L36.8679 32.3589L36.5178 32.6449L36.8039 32.995ZM5.23279 80.0779L4.80035 79.9461L5.23279 80.0779ZM70.2057 73.8665L70.4918 74.2166L70.8419 73.9305L70.5558 73.5805L70.2057 73.8665ZM55.7255 95.4613L56.158 95.593L55.7255 95.4613ZM54.1933 114.531L53.7454 114.592L53.8171 115.118L54.3254 114.963L54.1933 114.531ZM65.5771 111.052L65.8968 111.372L65.445 110.62L65.5771 111.052ZM55.582 121.048L55.2623 120.728L55.0729 120.917L55.1481 121.174L55.582 121.048ZM55.7052 121.461L55.8363 121.894L56.2689 121.763L56.1379 121.33L55.7052 121.461ZM5.18846 136.766L4.75581 136.897L4.88688 137.33L5.31953 137.199L5.18846 136.766ZM36.5178 32.6449C21.4941 44.9229 10.455 61.3858 4.80035 79.9461L5.66524 80.2096C11.2677 61.8207 22.205 45.5097 37.09 33.345L36.5178 32.6449ZM70.5558 73.5805L37.1539 32.7089L36.4538 33.2811L69.8557 74.1526L70.5558 73.5805ZM56.158 95.593C58.7135 87.2052 63.7023 79.7653 70.4918 74.2166L69.9197 73.5165C62.9915 79.1785 57.9008 86.7704 55.2931 95.3295L56.158 95.593ZM54.6413 114.47C53.783 108.169 54.2887 101.728 56.158 95.593L55.2931 95.3295C53.3856 101.59 52.8696 108.162 53.7454 114.592L54.6413 114.47ZM54.3254 114.963L65.7092 111.485L65.445 110.62L54.0612 114.098L54.3254 114.963ZM65.2575 110.733L55.2623 120.728L55.9016 121.367L65.8968 111.372L65.2575 110.733ZM56.1379 121.33C56.0965 121.194 56.0559 121.057 56.0159 120.921L55.1481 121.174C55.1889 121.314 55.2304 121.453 55.2726 121.593L56.1379 121.33ZM5.31953 137.199L55.8363 121.894L55.5741 121.029L5.05738 136.333L5.31953 137.199ZM4.80035 79.9461C-0.854331 98.5064 -0.869833 118.328 4.75581 136.897L5.62111 136.635C0.0473971 118.237 0.0627564 98.5986 5.66524 80.2096L4.80035 79.9461Z"
            fill="#101928"
          />
          <mask id="path-7-inside-2_183_14355" fill="white">
            <path d="M47.0334 22.7648C32.079 34.9861 21.0909 51.373 15.4623 69.8476C9.83371 88.3222 9.81827 108.052 15.418 126.536L65.9347 111.231C63.3664 102.754 63.3735 93.7045 65.955 85.231C68.5366 76.7576 73.5764 69.2417 80.4352 63.6363L47.0334 22.7648Z" />
          </mask>
          <path
            d="M47.0334 22.7648C32.079 34.9861 21.0909 51.373 15.4623 69.8476C9.83371 88.3222 9.81827 108.052 15.418 126.536L65.9347 111.231C63.3664 102.754 63.3735 93.7045 65.955 85.231C68.5366 76.7576 73.5764 69.2417 80.4352 63.6363L47.0334 22.7648Z"
            fill="#E8DB94"
            stroke="#101928"
            stroke-width="3.61658"
            mask="url(#path-7-inside-2_183_14355)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M140.249 125.574L150.295 115.528L154.451 128.635L151.709 130.263L188.749 145.418C182.288 161.209 171.797 175.029 158.323 185.496C144.848 195.963 128.864 202.711 111.965 205.066C95.0663 207.422 77.8455 205.301 62.0228 198.918C46.2001 192.534 32.3296 182.11 21.7969 168.687L22.8988 167.822L32.3294 158.686L33.7223 159.329L63.3228 136.102C68.1536 142.258 74.5154 147.039 81.7725 149.967C89.0297 152.895 96.9281 153.868 104.679 152.788C112.429 151.707 119.761 148.612 125.941 143.812C132.121 139.011 136.933 132.672 139.896 125.43L140.249 125.574Z"
            fill="#5A8383"
          />
          <path
            d="M150.295 115.528L150.726 115.391L150.501 114.682L149.976 115.208L150.295 115.528ZM140.249 125.574L140.078 125.992L140.356 126.106L140.569 125.894L140.249 125.574ZM154.451 128.635L154.682 129.024L154.991 128.84L154.882 128.498L154.451 128.635ZM151.709 130.263L151.479 129.874L150.698 130.338L151.538 130.681L151.709 130.263ZM188.749 145.418L189.168 145.589L189.339 145.171L188.92 145L188.749 145.418ZM158.323 185.496L158.6 185.853L158.323 185.496ZM111.965 205.066L111.903 204.619L111.965 205.066ZM62.0228 198.918L61.8537 199.337L62.0228 198.918ZM21.7969 168.687L21.5178 168.331L21.1622 168.61L21.4412 168.966L21.7969 168.687ZM22.8988 167.822L23.1779 168.178L23.1964 168.163L23.2134 168.147L22.8988 167.822ZM32.3294 158.686L32.5189 158.276L32.2375 158.146L32.0149 158.361L32.3294 158.686ZM33.7223 159.329L33.5328 159.739L33.7839 159.855L34.0014 159.685L33.7223 159.329ZM63.3228 136.102L63.6784 135.823L63.3993 135.467L63.0437 135.746L63.3228 136.102ZM81.7725 149.967L81.6034 150.387V150.387L81.7725 149.967ZM104.679 152.788L104.616 152.34L104.679 152.788ZM125.941 143.812L126.218 144.169L125.941 143.812ZM139.896 125.43L140.067 125.011L139.649 124.84L139.478 125.258L139.896 125.43ZM149.976 115.208L139.929 125.254L140.569 125.894L150.615 115.847L149.976 115.208ZM154.882 128.498L150.726 115.391L149.864 115.664L154.02 128.772L154.882 128.498ZM151.94 130.652L154.682 129.024L154.22 128.246L151.479 129.874L151.94 130.652ZM151.538 130.681L188.578 145.836L188.92 145L151.881 129.845L151.538 130.681ZM188.331 145.247C181.9 160.965 171.457 174.72 158.045 185.139L158.6 185.853C172.136 175.337 182.677 161.454 189.168 145.589L188.331 145.247ZM158.045 185.139C144.634 195.557 128.723 202.274 111.903 204.619L112.027 205.514C129.004 203.148 145.063 196.369 158.6 185.853L158.045 185.139ZM111.903 204.619C95.0823 206.963 77.9413 204.853 62.192 198.498L61.8537 199.337C77.7497 205.75 95.0504 207.88 112.027 205.514L111.903 204.619ZM62.192 198.498C46.4426 192.144 32.6364 181.768 22.1525 168.408L21.4412 168.966C32.0228 182.451 45.9576 192.923 61.8537 199.337L62.192 198.498ZM22.0759 169.042L23.1779 168.178L22.6197 167.466L21.5178 168.331L22.0759 169.042ZM23.2134 168.147L32.644 159.011L32.0149 158.361L22.5843 167.497L23.2134 168.147ZM32.14 159.097L33.5328 159.739L33.9117 158.919L32.5189 158.276L32.14 159.097ZM34.0014 159.685L63.6018 136.458L63.0437 135.746L33.4432 158.973L34.0014 159.685ZM62.9671 136.381C67.8468 142.6 74.2729 147.429 81.6034 150.387L81.9417 149.548C74.7579 146.65 68.4604 141.917 63.6784 135.823L62.9671 136.381ZM81.6034 150.387C88.9339 153.344 96.9121 154.327 104.741 153.235L104.616 152.34C96.944 153.409 89.1255 152.447 81.9417 149.548L81.6034 150.387ZM104.741 153.235C112.57 152.144 119.976 149.018 126.218 144.169L125.663 143.455C119.546 148.207 112.289 151.271 104.616 152.34L104.741 153.235ZM126.218 144.169C132.461 139.319 137.321 132.917 140.315 125.601L139.478 125.258C136.544 132.428 131.781 138.702 125.663 143.455L126.218 144.169ZM139.725 125.848L140.078 125.992L140.42 125.156L140.067 125.011L139.725 125.848Z"
            fill="#101928"
          />
          <mask id="path-10-inside-3_183_14355" fill="white">
            <path d="M32.0263 158.457C42.559 171.88 56.4296 182.304 72.2522 188.688C88.0749 195.071 105.296 197.192 122.194 194.837C139.093 192.481 155.078 185.733 168.552 175.266C182.026 164.799 192.518 150.979 198.979 135.188L150.126 115.2C147.162 122.442 142.35 128.781 136.17 133.582C129.99 138.382 122.659 141.477 114.908 142.558C107.157 143.638 99.2591 142.665 92.002 139.737C84.7448 136.809 78.383 132.028 73.5522 125.872L32.0263 158.457Z" />
          </mask>
          <path
            d="M32.0263 158.457C42.559 171.88 56.4296 182.304 72.2522 188.688C88.0749 195.071 105.296 197.192 122.194 194.837C139.093 192.481 155.078 185.733 168.552 175.266C182.026 164.799 192.518 150.979 198.979 135.188L150.126 115.2C147.162 122.442 142.35 128.781 136.17 133.582C129.99 138.382 122.659 141.477 114.908 142.558C107.157 143.638 99.2591 142.665 92.002 139.737C84.7448 136.809 78.383 132.028 73.5522 125.872L32.0263 158.457Z"
            fill="#94D9D9"
            stroke="#101928"
            stroke-width="3.61658"
            mask="url(#path-10-inside-3_183_14355)"
          />
        </svg>
      </div>

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
          <span className="font-primary">
            {" "}
            <span className="text-(--color-purpel)">Join 4,063+</span> users
            building their financial freedom
          </span>
        </div>

        {/* Heading - Responsive text sizing */}
        <h1 className="font-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
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
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg sm:max-w-xl md:max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
          {/* <input
            type="email"
            placeholder="Enter Email"
            className="w-full flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-[#9F7CE9] bg-opacity-40 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-(--color-purpel) hover:shadow-lg transition transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Join waitlist
          </button> */}
        </div>
      </div>

      {/* Right side paper plane graphics - Hidden on mobile, visible and scaled on larger screens */}
      <div className="hidden sm:block absolute   rotate-10 -right-[30%] top-[54%] w-32 h-32 md:w-48 md:h-48 lg:w-254 lg:h-254 z-10">
        <img src={flyIcon} alt="" srcset="" />
      </div>

      {/* Bottom left money bills graphic - Hidden on mobile, visible and scaled on larger screens */}
      <div className="hidden sm:block absolute left-[20%] bottom-[10%] w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 z-10 opacity-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="138"
          viewBox="0 0 112 138"
          fill="none"
        >
          <path
            d="M20 9C28.8 44.2 10.3333 74 0 84.5H48.5C71.3 64.9 74.3333 26 73 9H20Z"
            fill="#0F973D"
          />
          <path
            d="M28 1C36.8 36.2 18.3333 66 8 76.5H56.5C79.3 56.9 82.3333 18 81 1H28Z"
            fill="#0F973D"
            stroke="#101928"
            stroke-width="2"
          />
          <path
            d="M18.5 102.5C41.7 84.5 52.1667 50.3333 54.5 35.5L102.5 52.5C94.5 86.1 67.1667 107.5 54.5 114L18.5 102.5Z"
            fill="#0F973D"
          />
          <path
            d="M26.5 94.5C49.7 76.5 60.1667 42.3333 62.5 27.5L110.5 44.5C102.5 78.1 75.1667 99.5 62.5 106L26.5 94.5Z"
            fill="#0F973D"
            stroke="#101928"
            stroke-width="2"
          />
          <path
            d="M32.5 120C48.9 116.8 62.3333 88.3333 67 74.5L96 92C90.4 121.6 71.3333 135 62.5 138L32.5 120Z"
            fill="#0F973D"
          />
          <path
            d="M40.5 112C56.9 108.8 70.3333 80.3333 75 66.5L104 84C98.4 113.6 79.3333 127 70.5 130L40.5 112Z"
            fill="#0F973D"
            stroke="#101928"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
