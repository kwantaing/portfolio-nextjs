import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../images/siteLogos/qdevLogo.png";

const Header = () => {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <header
      className={`fixed top-0 p-[10px] ${
        show ? "bg-white text-black shadow-2xl dark:bg-gray-800 dark:text-gray-100" : "text-gray-200"
      } p-7 w-full z-50 grid grid-cols-4 ease-in transition-all duration-150`}
    >
      {/* <header className={`sticky top-0 z-50 ${show && 'bg-white'} shadow-xl p-5 grid grid-cols-4 ease-in transition-all duration-75`}> */}
      <div className="relative col-span-4 sm:col-auto  items-center h-16 cursor-pointer my-auto ">
        <Image
          // src="https://links.papareact.com/qd3"
          src={Logo}
          layout="fill"
          objectFit="contain"
          className="object-center sm:object-left transform transition-all duration-150"
        />
      </div>
      <span />
      <div className="hidden sm:inline-flex text-md font-semibold transform transition duration-500 ease-in-out col-span-2  flex space-x-2 justify-end items-center">
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
      </div>
    </header>
  );
};

export default Header;
