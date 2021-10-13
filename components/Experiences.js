import LargeCard from "./LargeCard";
import bistroLogo from "../images/bistroLogo.png";
import citiImg from "../images/thumbnails/citi.png";
import cppImg from "../images/thumbnails/cpp.png";
import codingDojoImg from "../images/thumbnails/coding_dojo.png";

const Experiences = () => {
  const work = [
    {
      title: "Bistro Studios",
      role: "Web Developer and Technical Trainer",
      img: bistroLogo,
      startDate: "2020-9-1",
      endDate: "2021-6-20",
      description: [
        "Provide Git, GatsbyJS, React, and Headless CMS integration training to the team.",
        "Enable company growth to provide headless CMS site services to clients.",
        "Developed and deployed Headless CMS Project for client from the ground up.",
        "Provide guidance and assistance with rebuild of Bistro Studios' marketing site.",
      ],
      location: "Azusa, CA",
    },
    {
      title: "CitiBank International",
      role: "Market Research Consultant",
      img: citiImg,
      startDate: "2015-7-1",
      endDate: "2015-8-15",
      description: [
        "Handled reporting for sale, marketing, and customer relationship management.",
        "Documented progress with prospects and current client companies in Hong Kong and China.",
        "Managed inventory for market research department.",
      ],
      location: "Hong Kong, Hong Kong",
    },
  ];
  const education = [
    {
      role: "Bachelor of Computer Information Systems",
      // school: "California State Polytechnic University, Pomona",
      title: "California State Polytechnic University, Pomona",
      startDate: "2015-9-23",
      endDate: "2020-5-15",
      description: [
        "Systems Analysis and Design",
        "Object Oriented Programming in Java",
      ],
      gpa: "3.23",
      img: cppImg,
      location: "Pomona, CA",
    },
    {
      role: "Full Stack Web Development Program",
      school: "Coding Dojo",
      startDate: " 2019-5-20",
      endDate: "2019-8-23",
      description: [
        "Full Stack courses in MEAN, Python, and C# ASP.Net Core.",
        "Completed over 1,000 hours of hands on coding.",
        "Graduated top of the class with highest possible achievement.",
      ],
      img: codingDojoImg,
      location: "Costa Mesa, CA",
    },
  ];
  return (
    <main className="grid pb-5 pt-5 pl-10 pr-10 space-x-2">
      {/* <div className="xl:overflow-scroll xl:scrollbar-hide xl:max-h-[92vh]"> */}
        <div>
        {/* <div id="experiences" className="flex flex-col"> */}
        {work.map((experience) => (
          <LargeCard experience={experience} />
        ))}
        {education.map((experience)=>(
          <LargeCard experience={experience}/>
        ))}
        {/* </div> */}
      </div>
    </main>
  );
};

export default Experiences;
