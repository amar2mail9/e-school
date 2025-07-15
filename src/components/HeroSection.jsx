import React from "react";

function HeroSection() {
  return (
    <section className="w-full bg-[#f0fff0] py-10 md:py-16 lg:py-[50px] px-4 sm:px-6 md:px-10 lg:px-[205px]">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#FD511A] text-[16px] font-medium mb-2">
            Are you ready to Learn?
          </p>

          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-bold leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[70px] text-gray-900 mb-6">
            Learn With fun <br />
            on <span className="text-[#21B573]">any schedule</span>
          </h1>

          <p className="text-[16px] text-[#6C6B6B] leading-[28px] md:leading-[36px] mb-6 max-w-[500px] mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br className="hidden md:block" />
            Varius blandit facilisis quam netus.
          </p>

          <div>
            <button className="bg-[#21B573] py-3 px-8 text-white text-[14px] rounded-full shadow-md hover:bg-[#1a9c63] transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./01.png"
            alt="Learning Illustration"
            loading="lazy"
            className="w-full max-w-[500px] sm:max-w-[554px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
