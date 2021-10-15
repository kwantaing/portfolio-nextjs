import MediumCard from "./MediumCard";
import mccThumb from "../images/thumbnails/mccThumb.png";
import bistroThumb from "../images/thumbnails/bistroThumb.png";
import netflixThumb from "../images/thumbnails/netflix_homepage.png";
import airbnbThumb from "../images/thumbnails/airbnbThumb.png";
import portfolioThumb from "../images/thumbnails/portfolioThumb.png";

const Projects = () => {
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
        "Main marketing site for the web design company, Bistro Studios.",
      ],
      technologies: [
        "React",
        "GatsbyJS",
        "NodeJS",
        "GraphQL",
        "Contentful",
        "Netlify",
      ],
      images: [],
      thumbnail: bistroThumb,
      features: [],
      link: "https://bistro.studio",
    },
    "Airbnb clone": {
      name: "Airbnb clone",
      description: [
        "Airbnb clone web application that implements Mapbox, search features, etc.",
      ],
      technologies: ["React", "NodeJS", "Tailwind CSS", "Mapbox"],
      images: [],
      thumbnail: airbnbThumb,
      features: [],
      link: "https://airbnb-clone-psi-ochre.vercel.app/",
    },
    "Netflix clone": {
      name: "Netflix clone",
      description: [
        "Netflix clone web application that implements TMDB API and Stripe API via firebase",
        "Displays featured shows in the standard Netflix home page format",
        "User management, Subscription registration and payment handling",
      ],
      images: [],
      thumbnail: netflixThumb,
      technologies: [
        "React",
        "NodeJS",
        "Google Firebase",
        "TMDB API",
        "Stripe API",
        "Firebase Auth",
      ],
      link: "https://netflix-clone-33d69.web.app",
    },
    Portfolio: {
      name: "Portfolio",
      description: [
        "Personal portfolio page, showcasing skills, experience, and projects.",
      ],
      images: [],
      thumbnail: portfolioThumb,
      features: [],
      technologies: ["React", "NodeJS", "NextJS", "Tailwind CSS", "AWS S3"],
      link: "#",
    },
    // "Android Destinations Tracker": {
    //   name: "Android Destinations Tracker",
    //   description: [
    //     "Android application that keeps track of user travel destinations, sorted by dream, planned and explored destinations",
    //     "Displays and pins destinations on Google maps by color coded markers",
    //   ],
    //   images: [],
    //   thumbnail: "",
    //   features: [],
    //   technologies: ["Java", "Google Maps API", "Sqlite", "Android Studio"],
    //   link: "https://github.com/kwantaing/Android_Destinations_Tracker",
    // },
  };
  return (
    <div>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
        {Object.keys(projects).map((key) => {
          return (
            <MediumCard
              key={key}
              img={projects[key].thumbnail}
              title={projects[key].name}
              link={projects[key].link}
              tech={projects[key].technologies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
