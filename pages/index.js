import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";

export default function Home({ projectFillerData,skillsData }) {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6" id="projects">
          <h1 className="font-bold text-xl">Projects</h1>
          <Projects data={projectFillerData} />
        </section>
        <section className="pt-6 " id="skills">
          <h1 className="font-bold text-xl">Skills</h1>
          <Skills  skillsdata={skillsData}/>
        </section>
        <section className="pt-6" id="projects">
          <h1 className="font-bold text-xl">Experiences</h1>
          <Experiences />
        </section>
        {/* <section className="pt-6" id="projects">
					<h2 className="text-4xl font-semibold pb-5">Projects</h2>
          <Projects/>
				</section> */}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const projectFillerData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );
  const skillsData = await fetch("https://portfolio-data-qdev.s3.us-east-2.amazonaws.com/skills.json").then(
    res=>res.json()
  )
  return {
    props: {
      exploreData,
      projectFillerData,
      skillsData,
    },
  };
}
