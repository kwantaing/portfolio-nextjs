import MediumCard from "./MediumCard";
import mccThumb from "../images/thumbnails/mccThumbnail.png";
import bistroThumb from "../images/thumbnails/bistrostudioThumbnail.png"

const Projects = ({ data }) => {
  const projects = {
    "Mission City Church": {
      name: "Mission City Church",
      description: [
        "An informational website complete with WordPress content for Mission City Church, based in San Antonio.",
        "Responsive headless CMS built from the ground up as a part of Bistro Studio's team.",
      ],
      technologies: [
        "React",
        "GatsbyJS",
        "NodeJS",
        "GraphQL",
        "WordPress",
        "Netlify",
      ],
      images: [],
      thumbnail: mccThumb,
      features: [],
      link: "https://missioncity.church",
    },
    "Bistro Studios": {
      name: "Bistro Studios",
      description: [
        "Main marketing site for the web design company, Bistro Studios."
      ],
      technologies: [
        "React","GatsbyJS","NodeJS","GraphQL","Contentful","Netlify"
      ],
      images: [],
      thumbnail: bistroThumb,
      features: [],
      link: "https://bistro.studio",
    }
  };
  return (
    <div id="projects">
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
        {Object.keys(projects).map((key) => {
          console.log(projects[key]);
          return (
            <MediumCard img={projects[key].thumbnail} title={projects[key].name} />
          );
        })}

        {data.map((project) => {
          console.log(project);
          return <MediumCard img={project.img} title={project.title} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
