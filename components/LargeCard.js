import Image from "next/image";
const LargeCard = ({ experience }) => {
  const { img, description, startDate, endDate, title, location, role } =
    experience;
  let startDateFormatted = new Date(startDate);
  let endDateFormatted = new Date(endDate);
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t rounded-2xl last:mb-5">
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
      <div className="flex flex-col flex-grow pl-5">
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
        <h4 className="text-md font-semibold">{role}</h4>
        <h4 className="text-md font-semibold">{title}</h4>
        <div className="flex justify-between">
          <p>{location}</p>
          {/* <HeartIcon className="h-7 cursor-pointer" /> */}
        </div>
        <div className="border-b w-20 pt-2" />
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
  );
};

export default LargeCard;
