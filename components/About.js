import Image from "next/image";
import React, { useEffect, useState } from "react";

const About = () => {
  const text1 = "Hi, I'm Quentin.";
  const text2 = "I'm a Software Engineer.";
  const speed = 75;
  let i = 0;
  let j = 0;
  const resumeUrl =
    "https://quentin-ng.com/quentin-ng-resume.pdf";
  const gotoResume = () => {
    window.open(resumeUrl, "_blank");
  };
  const typeWriter = () => {
    if (i < text1.length) {
      document.getElementById("text1").innerHTML += text1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      if (j < text2.length) {
        document.getElementById("text2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
      }
    }
  };
  useEffect(() => {
    typeWriter();
  }, []);
  return (
    <div
      id="about"
      className={`bg-gradient-to-br from-purple-200 via-purple-400 to-blue-400 relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]`}
    >
      <div className="absolute top-1/2 w-full text-center">
        <p
          id="text1"
          className="text-sm sm:text-lg font-semibold text-gray-200"
        >
          &nbsp;
        </p>
        <p
          id="text2"
          className="text-sm sm:text-lg font-semibold text-gray-200"
        >
          &nbsp;
        </p>
        <button
          onClick={() => gotoResume()}
          className="text-purple-500 bg-gray-200 px-8 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transform transition-all duration-150"
        >
          <span className="animate-pulse">About me</span>
        </button>
      </div>
    </div>
  );
};

export default About;
