import SmallCard from "./SmallCard";
import nodeJs from "../images/nodeJS.png";
import tailwindLogo from "../images/tailwind.png";
import cSharp from "../images/cSharp.png";
import cssLogo from "../images/css.png";
import htmlLogo from "../images/html.png";
import javascriptLogo from "../images/javascript.png";
import pythonLogo from "../images/python.png";
import javaLogo from "../images/java.png";

const Skills = ({skillsdata}) => {
    console.log(skillsdata);
  const skills = {
    languages: [
      {
        name: "C#",
        yoe: "2",
        img: cSharp,
      },
      {
        name: "Javascript",
        yoe: "3",
        img: javascriptLogo,
      },
      {
        name: "Java",
        yoe: "3",
        img: javaLogo,
      },
      {
        name: "Python",
        yoe: "2.5",
        img: pythonLogo,
      },
      {
        name: "HTML",
        yoe: "4",
        img: htmlLogo,
      },
      {
        name: "CSS",
        yoe: "4",
        img: cssLogo,
      },
    ],

    frameworks: [
      {
        name: "ASP.NET Core",
        yoe: "2",
      },
      {
        name: "Entity Framework Core",
        yoe: "2",
      },

      {
        name: "nodeJS",
        yoe: "2",
        img: nodeJs,
      },
      {
        name: "Tailwind CSS",
        yoe: "1",
        img: tailwindLogo,
      },
      {
        name: "SASS",
        yoe: "1",
      },
    ],
    databases: [
      {
        name: "Contentful",
        yoe: "2",
      },
      {
        name: "MongoDB",
        yoe: "2",
      },
      {
        name: "mySQL",
        yoe: "3",
      },
      {
        name: "noSQL",
        yoe: "2",
      },
      {
        name: "SQLite",
        yoe: "2",
      },
      {
        name: "WordPress",
        yoe: "1",
      },
      {
        name: "Firebase",
        yoe: "1",
      },
      {
        name: "AWS DynamoDB",
        yoe: "1",
      },
    ],
    tools: [
      {
        name: "Android Studio",
        yoe: "1",
      },
      {
        name: "Git",
        yoe: "3",
      },
      {
        name: "Visual Studio",
        yoe: "2",
      },
      {
        name: "Visual Studio Code",
        yoe: "3",
      },
    ],
    methodologies: [
      {
        name: "Agile Development",
      },
      {
        name: "MVC",
      },
      {
        name: "Object Oriented Programming",
      },
      {
        name: "RESTful API",
      },
      {
        name: "Scrum",
      },
    ],
  };
  const { languages, frameworks, databases, tools, methodologies } = skills;
  return (
    <div id="tech">
      <section id="languages">
        <h2 className="pl-3 pt-2 font-semibold">Languages</h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {languages.map((language) => (
            <SmallCard skill={language} />
          ))}
        </div>
      </section>
      <section id="frameworks">
        <h2 className="pl-3 pt-2 font-semibold">Frameworks</h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {frameworks.map((framework) => (
            <SmallCard skill={framework} />
          ))}
        </div>
      </section>
      <section id="databases">
        <h2 className="pl-3 pt-2 font-semibold">Databases and Storage Solutions</h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {databases.map((database) => (
            <SmallCard skill={database} />
          ))}
        </div>
      </section>
      <section id="tools">
        <h2 className="pl-3 pt-2 font-semibold">Developer tools and Software</h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool) => (
            <SmallCard skill={tool} />
          ))}
        </div>
      </section>
      <section id="methodologies">
        <h2 className="pl-3 pt-2 font-semibold">Methodogies, Architectures, Concepts</h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {methodologies.map((item) => (
            <SmallCard skill={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
