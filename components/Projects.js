import MediumCard from "./MediumCard";

const Projects = ({ data }) => {
  return (
    <div id="projects">
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
        {data.map((project) => (
          <MediumCard img={project.img} title={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
