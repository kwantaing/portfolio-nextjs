import Image from "next/image";
import aStudio from "../images/androidStudio.png";

const MediumCard = ({ img, title, link }) => {
  const goToProjectLink = (link) => window.open(link, "_blank");
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-64 w-64" onClick={() => goToProjectLink(link)}>
        <Image
          alt={title}
          src={img ? img : aStudio}
          layout="fill"
          objectFit="cover"
          className="bg-gray-500 rounded-xl"
        />
      </div>
      <h3 className="text-xl mt-3 font-sans">{title}</h3>
    </div>
  );
};

export default MediumCard;
