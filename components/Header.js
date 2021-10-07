import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl p-5 grid grid-cols-4">
      <div className="relative flex items-center h-10 cursor-pointer my-auto  ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <span />
      <div className="hidden sm:inline-flex text-md font-semibold transform transition duration-500 ease-in-out col-span-2  flex space-x-2 justify-end items-center">
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
      </div>
    </header>
  );
};

export default Header;
