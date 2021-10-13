import SmallCard from "./SmallCard";

const Skills = ({ skillsData }) => {
  console.log(skillsData);
  const { languages, frameworks, databases, tools, methodologies } = skillsData;
  return (
    <div id="tech">
      <section id="languages">
        <h2 className="pl-3 pt-2 font-semibold">Languages</h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {languages.map((language) => (
            <SmallCard key={language.name} skill={language} />
          ))}
        </div>
      </section>
      <section id="frameworks">
        <h2 className="pl-3 pt-2 font-semibold">Frameworks</h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {frameworks.map((framework) => (
            <SmallCard key={framework.name} skill={framework} />
          ))}
        </div>
      </section>
      <section id="databases">
        <h2 className="pl-3 pt-2 font-semibold">
          Databases and Storage Solutions
        </h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {databases.map((database) => (
            <SmallCard key={database.name} skill={database} />
          ))}
        </div>
      </section>
      <section id="tools">
        <h2 className="pl-3 pt-2 font-semibold">
          Developer tools and Software
        </h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool) => (
            <SmallCard key={tool.name} skill={tool} />
          ))}
        </div>
      </section>
      <section id="methodologies">
        <h2 className="pl-3 pt-2 font-semibold">
          Methodogies, Architectures, Concepts
        </h2>
        <div className="grid grid-cols-1 content-center justify-around sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {methodologies.map((item) => (
            <SmallCard key={item.name} skill={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
