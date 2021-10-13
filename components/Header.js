import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../images/siteLogos/qdevLogo.png";

const Header = () => {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const scrollToEle = (id) => {
    const element = document.getElementById(id);
    if (id === "about") {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, left: 0, behavior: "smooth" });
    }
  };
  return (
    <header
      className={`fixed top-0 p-[10px] ${
        show
          ? "bg-white text-black shadow-2xl dark:bg-gray-800 dark:text-gray-100"
          : "text-gray-200"
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
      <div className="hidden sm:inline-flex text-md font-semibold transform transition duration-500 ease-in-out col-span-2  flex space-x-3 justify-end items-center">
        <a className="cursor-pointer" onClick={() => scrollToEle("about")}>
          About
        </a>
        <a className="cursor-pointer" onClick={() => scrollToEle("projects")}>
          Projects
        </a>
        <a className="cursor-pointer" onClick={() => scrollToEle("skills")}>
          Tech
        </a>
        <a
          className="cursor-pointer"
          onClick={() => scrollToEle("experiences")}
        >
          Experiences
        </a>
      </div>
    </header>
  );
};

export default Header;
