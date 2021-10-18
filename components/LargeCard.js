import Image from "next/image";
const LargeCard = ({ experience }) => {
  const { img, description, startDate, endDate, title, location, role } =
    experience;
  let startDateFormatted = new Date(startDate);
  let endDateFormatted = new Date(endDate);
  return (
      <div
        className="shadow-sm sm:flex z-20 py-7 px-2 border-b dark:bg-gray-900 border-none my-3 
            cursor-pointer dark:opacity-100 dark:hover:opacity-80 opacity-90 hover:opacity-100 dark:hover:bg-gray-900
          hover:bg-gray-50 dark:hover:shadow-lg hover:shadow-2xl pr-4 transition duration-500 
            ease-out first:border-t rounded-2xl md:grid md:grid-cols-6"
      >
        {/* Left */}
        <div className="relative ml-5 md:ml-7 h-24 w-40 md:h-52 xl:ml-16 lg:w-60 flex-shrink-1 md:col-span-2 transform transition-all duration-100 ease-in">
          <Image
            className="relative h-1/2 mx-5 object-left sm:object-center "
            src={img}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Right */}
        <div className=" md:inline-flex flex-col flex-grow pl-5 pt-2 md:col-span-4">
          <p className="text-sm text-gray-500">
            {startDateFormatted.toLocaleString("default", { month: "long" })}{" "}
            {startDateFormatted.getFullYear()} -{" "}
            {endDateFormatted
              ? endDateFormatted.toLocaleString("default", { month: "long" }) +
              " " +
              endDateFormatted.getFullYear()
              : ""}
          </p>
              <div className=" border-purple-400 border-b-[1.5px] w-2/5 pt-2 mb-1" />
          <h4 className="text-md font-medium text-gray-600 dark:text-gray-300">
            {role}
          </h4>
          <h4 className="text-md font-medium text-gray-700 dark:text-gray-400">
            {title}
          </h4>
          <h2 className="text-sm font-medium text-gray-800 dark:text-gray-500">
            {location}
          </h2>
          <div className="hidden md:inline-flex  border-b-[1.5px] border-purple-400 w-2/5 pt-2 mb-1" />
          <div className="hidden md:block" id="descriptions">
            {description.map((desc) => (
              <p
                key={desc.substr(0, 10)}
                className="pt-2 text-xs text-gray-700 dark:text-gray-500 flex-grow"
              >
                {desc}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
