import Image from "next/image";
const LargeCard = ({ experience }) => {
  const { img, description, startDate, endDate, title, location, role } =
    experience;
  let startDateFormatted = new Date(startDate);
  let endDateFormatted = new Date(endDate);
  return (
    <div className="flex py-7 px-2 border-b dark:bg-gray-800 border-none my-3 cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t rounded-2xl last:mb-5">
      {/* Left */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl h-1/2"
          src={img}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Right */}
      <div className=" md:inline-flex flex-col flex-grow pl-5">
        <p className="text-sm text-gray-500">
          {startDateFormatted.toLocaleString("default", { month: "long" })}{" "}
          {startDateFormatted.getFullYear()} -{" "}
          {endDateFormatted
            ? endDateFormatted.toLocaleString("default", { month: "long" }) +
              " " +
              endDateFormatted.getFullYear()
            : ""}
        </p>
        <div className="border-b w-20 pt-2" />
        <h4 className="text-md font-medium text-gray-300">{role}</h4>
        <h4 className="text-md font-medium text-gray-400">{title}</h4>
        <h2 className="text-sm font-medium text-gray-500">{location}</h2>
        {/* <div className="text-md font-medium flex justify-between text-gray-300">
          <p>{location}</p>
        </div> */}
        <div className="hidden lg:inline-flex border-b w-20 pt-2" />
        <div className="hidden lg:block" id="descriptions">
          {description.map((desc) => (
            <p
              key={desc.substr(0, 10)}
              className="pt-2 text-sm text-gray-500 flex-grow"
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
