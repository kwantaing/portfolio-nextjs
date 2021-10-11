import LargeCard from "./LargeCard";
import bistroimg from "../images/thumbnails/bistrostudioThumbnail.png";

const Experiences = () => {
  const experience = {
    title: "Bistro Studios",
    role: "Web developer and Technical Trainer",
    img: bistroimg,
    startDate: "9/2020",
    endDate: "6/2021",
    description: [
      "Provide Git, GatsbyJS, React, and Headless CMS integration training to the team.",
      "Enable company growth to provide headless CMS site services to clients.",
      "Developed and deployed Headless CMS Project for client from the ground up.",
      "Provide guidance and assistance with rebuild of Bistro Studios' marketing site.",
    ],
    location: "Azusa, CA"
  };
  return (
    <main className="grid pb-5 pt-5 pl-10 pr-10 space-x-2">
      <div className="xl:overflow-scroll xl:scrollbar-hide xl:max-h-[92vh]">
        {/* <div id="experiences" className="flex flex-col"> */}
          <LargeCard left experience={experience} />
          <LargeCard experience={experience} />
          <LargeCard left experience={experience} />
          <LargeCard experience={experience} />
          <LargeCard left experience={experience} />
          <LargeCard left experience={experience} />
          <LargeCard experience={experience} />
        {/* </div> */}
      </div>
    </main>
  );
};

export default Experiences;
