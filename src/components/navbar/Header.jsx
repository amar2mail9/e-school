import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

function Header() {
  const menu = [
    { name: "Books", link: "#", button: false },
    { name: "Courses", link: "#", button: false },
    { name: "Others", link: "#", button: false },
    { name: "Blog", link: "#", button: false },
    { name: "Sign in", link: "#", button: true },
  ];

  const [openToggle, setOpenToggle] = useState(false);
  const handleOnClickToggle = () => setOpenToggle(!openToggle);

  return (
    <div className="sticky top-0 z-40">
      {/* Desktop Header */}
      <header className="w-full bg-[#F0FFF0] py-[30px] px-6 lg:px-[205px] hidden md:block">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="pl-2">
            <img src="./logo.png" alt="logo" className="w-[198px] h-[59px]" />
          </div>

          {/* Menu */}
          <ul className="flex gap-[40px] items-center">
            {menu.map(({ name, link, button }, idx) => (
              <li
                key={idx}
                className={`${
                  button
                    ? "bg-[#21B573] text-white w-[104px] h-[43px] text-center flex items-center justify-center rounded-full"
                    : "text-gray-900 hover:text-[#21B573] transition"
                }`}
              >
                <a
                  href={link}
                  className="w-full h-full flex items-center justify-center"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile & Tablet Header */}
      <div className="px-6 py-4 md:hidden bg-[#f0fff0] flex items-center justify-between">
        <img
          src="./logo.png"
          alt="logo"
          className="w-[160px] h-[48px]"
          loading="lazy"
        />

        <button
          onClick={handleOnClickToggle}
          className="text-gray-700 w-10 h-10 p-1.5"
        >
          {openToggle ? (
            <RiCloseLargeLine className="w-full h-full" />
          ) : (
            <TiThMenu className="w-full h-full" />
          )}
        </button>
      </div>

      {/* Mobile/Tablet Menu Drawer */}
      {openToggle && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-[#f0fff0] z-50 shadow-md py-5 rounded-b-2xl">
          <ul className="flex flex-col gap-4 items-center">
            {menu.map(({ name, link, button }, idx) => (
              <li
                key={idx}
                className={`${
                  button
                    ? "bg-[#21B573] text-white w-[104px] h-[43px] text-center flex items-center justify-center rounded-full"
                    : "text-gray-900 hover:text-[#21B573] transition"
                }`}
              >
                <a
                  href={link}
                  className="w-full h-full flex items-center justify-center"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
