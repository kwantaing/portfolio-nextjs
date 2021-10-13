import nodeJs from "../images/nodeJS.png";

import Image from "next/image";
const smallCard = ({ skill }) => {
  const { name, yoe, img } = skill;
  return (
    <div className="flex items-center p-2 m-2 mt-5 space-x-4 rounded-xl dark:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image
          src={img ? img : nodeJs}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      {/* Right */}
      <div className="font-semibold text-sm">
        <h2>{skill.name}</h2>
        {skill?.yoe && (
          <h3>
            {skill.yoe} {skill.yoe == 1 ? "year" : "years"}
          </h3>
        )}
      </div>
    </div>
  );
};

export default smallCard;
