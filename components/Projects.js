import MediumCard from "./MediumCard";
import mccThumb from "../images/thumbnails/mccThumb.png";
import bistroThumb from "../images/thumbnails/bistroThumb.png";
import netflixThumb from "../images/thumbnails/netflix_homepage.png";
import airbnbThumb from "../images/thumbnails/airbnbThumb.png";
import portfolioThumb from "../images/thumbnails/portfolioThumb.png";
import redditThumb from "../images/thumbnails/redditThumb.png";

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
      technologies: ["React", "NodeJS", "NextJS", "Tailwind CSS", "Mapbox"],
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
        "Redux",
        "NodeJS",
        "Google Firebase",
        "TMDB API",
        "Stripe API",
        "Firebase Auth",
      ],
      link: "https://netflix-clone-33d69.web.app",
    },
    // "Reddit clone": {
    //   name: "Reddit clone",
    //   descrpition: [
    //     "Reddit clone full stack application that leverages NextAuth and Supabase to serve community posts and forums.",
    //     "Users can create, upvote, and comment on posts. They can also create a new subreddit community for other users to follow.",
    //   ],
    //   images: [],
    //   thumbnail: redditThumb,
    //   technologies: [
    //     "React",
    //     "NextJS",
    //     "Supabase",
    //     "PostGreSQL",
    //     "NextAuth",
    //     "Tailwind CSS",
    //   ],
    //   link: "https://reddit-app-1.vercel.app"
    // },
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
