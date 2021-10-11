import Image from "next/image";
const LargeCard = ({ experience }) => {
  const { img, description, dates, title, location, role } = experience;
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t rounded-2xl last:mb-5">
      {/* Left */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Right */}
      <div className="flex flex-col flex-grow pl-5">
        <h4 className="text-xl font-semibold">
          {title}, {role}
        </h4>
        <div className="flex justify-between">
          <p>{location}</p>
          {/* <HeartIcon className="h-7 cursor-pointer" /> */}
        </div>
        <div className="border-b w-10 pt-2" />
        {description.map(desc => (
            <p className="pt-2 text-sm text-gray-500 flex-grow">{desc}</p>

        ))}
      </div>
    </div>
  );
};

export default LargeCard;
