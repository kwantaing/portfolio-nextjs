import Image from "next/image";
import aStudio from "../images/androidStudio.png";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          alt={title}
          src={img ? img : aStudio}
          layout="fill"
          objectFit="cover"
          className="bg-gray-300 rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
