import Image from "next/image";
import React, { useEffect, useState } from "react";

const About = () => {
  const resumeUrl =
    "https://portfolio-data-qdev.s3.us-east-2.amazonaws.com/quentin-ng-swe-resume.pdf";
  const gotoResume = () => {
    window.open(resumeUrl, "_blank");
  };

  const getRandomInt = () => {
    return Math.floor(Math.random() * 6);
  };
  const gradient = {
    direction: [
      "bg-gradient-to-br",
      "bg-gradient-to-b",
      "bg-gradient-to-bl",
      "bg-gradient-to-r",
      "bg-gradient-to-tr",
      "bg-gradient-to-bl",
    ],
    colors: ["blue", "green", "red", "yellow", "pink", "purple"],
    weight: ["100", "200", "300", "400", "600", "800"],
  };
  const randomGradient = () => {
    let direction = gradient.direction[getRandomInt()];
    let from = `from-${gradient.colors[getRandomInt()]}-${
      gradient.weight[getRandomInt()]
    }`;
    let via = `via-${gradient.colors[getRandomInt()]}-${
      gradient.weight[getRandomInt()]
    }`;
    let to = `to-${gradient.colors[getRandomInt()]}-${
      gradient.weight[getRandomInt()]
    }`;
    return `${direction} ${from} ${via} ${to}`;
  };
  return (
    <div
    id="banner"
      className={`bg-gradient-to-br from-purple-200 via-purple-400 to-blue-400 relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]`}
    >
      {/* <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
    /> */}
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-semibold text-gray-200">
          Hello, I'm Quentin, a software developer.
        </p>
        <button
          onClick={() => gotoResume()}
          className="text-red-400 bg-gray-200 px-8 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          About me
        </button>
      </div>
    </div>
  );
};

export default About;
