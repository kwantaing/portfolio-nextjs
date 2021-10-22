import Image from "next/image";
const smallCard = ({ skill }) => {
  const { name, yoe, img } = skill;
  return (
    <div className="flex items-center p-2 m-2 mt-5 space-x-4 rounded-xl dark:bg-gray-900 dark:hover:bg-gray-700 cursor-pointer hover:shadow-md hover:bg-gray-50 hover:scale-105 transition duration-200 ease-in-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        {img ? (
          <Image
            src={img}
            layout="fill"
            objectFit="contain"
            className="rounded-lg dark:text-gray-100"
            alt={name ? name :""}

          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full dark:text-gray-100 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        )}
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
