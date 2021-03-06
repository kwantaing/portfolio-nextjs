import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 p-2">
      <div className="grid grid-cols-3 items-center w-full h-full">
        <div className="flex h-full justify-center align-middle">
          <SocialIcon
            className="hover:scale-110 hover:opacity-95 opacity-80 btransform transition-all duration-125"
            bgColor="gray"
            url="https://www.github.com/kwantaing"
          ></SocialIcon>
        </div>
        <div className="flex h-full justify-center align-middle">
          <SocialIcon
            className="hover:scale-110 hover:opacity-95 opacity-80  transform transition-all duration-125"
            url="https://www.linkedin.com/in/kwan-tai-quentin-ng-29349bbb"
          />
        </div>
        <div className="flex h-full justify-center align-middle">
          <SocialIcon
            bgColor="#8829D0"
            className="hover:scale-110 hover:opacity-95 opacity-80  transform transition-all duration-125"
            url="mailto:quentin.ng.dev@gmail.com"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
