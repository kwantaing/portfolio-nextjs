import Image from "next/image";
const LargeCard = ({ experience }) => {
  const { img, description, startDate, endDate, title, location, role } =
    experience;
  let startDateFormatted = new Date(startDate);
  let endDateFormatted = new Date(endDate);
  return (
      <div
        className="sm:flex z-20 py-7 px-2 border-b dark:bg-gray-900 border-none my-3 
            cursor-pointer dark:opacity-100 dark:hover:opacity-80 opacity-90 hover:opacity-100 dark:hover:bg-gray-900
          hover:bg-gray-50 dark:hover:shadow-lg hover:shadow-2xl pr-4 transition duration-200 
            ease-out first:border-t rounded-2xl last:mb-5"
      >
        {/* Left */}
        <div className="relative ml-5 h-24 w-40 md:h-52 md:w-60 flex-shrink-1 ">
          <Image
            className="relative h-1/2 object-left sm:object-center "
            src={img}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Right */}
        <div className=" md:inline-flex flex-col flex-grow pl-5 pt-2">
          <p className="text-sm text-gray-500">
            {startDateFormatted.toLocaleString("default", { month: "long" })}{" "}
            {startDateFormatted.getFullYear()} -{" "}
            {endDateFormatted
              ? endDateFormatted.toLocaleString("default", { month: "long" }) +
              " " +
              endDateFormatted.getFullYear()
              : ""}
          </p>
              <div className="border-b border-purple-400 border-2 w-2/5 pt-2 mb-1" />
          <h4 className="text-md font-medium text-gray-600 dark:text-gray-300">
            {role}
          </h4>
          <h4 className="text-md font-medium text-gray-700 dark:text-gray-400">
            {title}
          </h4>
          <h2 className="text-sm font-medium text-gray-800 dark:text-gray-500">
            {location}
          </h2>
          <div className="hidden lg:inline-flex border-b border-purple-400 border-2 w-2/5 pt-2 mb-1" />
          <div className="hidden lg:block" id="descriptions">
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
