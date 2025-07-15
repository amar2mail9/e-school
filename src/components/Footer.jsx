import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#282531] text-white px-4 md:px-10 lg:px-[120px] py-10">
      <div className="flex flex-col md:flex-row  justify-between gap-y-10 gap-x-6">
        {/* Left text */}
        <div className="w-full md:w-[45%] lg:w-[30%] text-center md:text-left">
          <p className="text-[16px] leading-6">
            Millions of people of all ages and from around{" "}
            <br className="hidden md:block" />
            the world are improving their lives with us
          </p>
        </div>

        {/* Course column */}
        <div className="w-full md:w-[25%] lg:w-[15%] text-center md:text-left">
          <h3 className="text-[18px] font-bold mb-3">Course</h3>
          <ul className="text-[16px] space-y-2">
            <li>Graphic Design</li>
            <li>Web Design</li>
            <li>Business</li>
            <li>Marketing</li>
            <li>Engineering</li>
          </ul>
        </div>

        {/* Terms column */}
        <div className="w-full md:w-[25%] lg:w-[15%] text-center md:text-left">
          <h3 className="text-[18px] font-bold mb-3">Terms</h3>
          <ul className="text-[16px] space-y-2">
            <li>Graphic Design</li>
            <li>Web Design</li>
            <li>Business</li>
            <li>Marketing</li>
            <li>Engineering</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-full md:w-[25%] lg:w-[15%] text-center md:text-left">
          <h3 className="text-[18px] font-bold mb-3">Useful Link</h3>
          <ul className="text-[16px] space-y-2">
            <li>Graphic Design</li>
            <li>Web Design</li>
            <li>Business</li>
            <li>Marketing</li>
            <li>Engineering</li>
          </ul>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 text-center text-sm text-gray-300">
        <p>Copyright © 2020 Rokomari.com</p>
      </div>
    </footer>
  );
};

export default Footer;
