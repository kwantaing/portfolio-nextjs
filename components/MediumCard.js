import Image from "next/image";
import aStudio from "../images/androidStudio.png";

const MediumCard = ({ img, title, link, tech }) => {
  const goToProjectLink = (link) => {
    if (link !== "#") {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div
        className="relative h-64 w-64 z-2 hover:shadow-lg transform  rounded-xl transition-all duration-300 ease-in-out "
        onClick={() => goToProjectLink(link)}
      >
        <Image
          alt={title}
          src={img ? img : aStudio}
          layout="fill"
          objectFit="cover"
          className="bg-gray-500 rounded-xl"
        />
        <div className="opacity-0 hover:opacity-95 hover:absolute top-0 left-0 h-full w-full rounded-xl z-50 hover:bg-gradient-to-t hover:from-black transform transition-all duration-300 ease-in-out ">
          <div className="absolute left-1/3 top-1/4 z-51 text-white">
            {tech.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-xl mt-3 font-sans">{title}</h3>
    </div>
  );
};

export default MediumCard;
