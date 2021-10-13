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
        <a href="" id="projects" className="top-[-250px]"></a>
        <section className="pt-6">
          <h1 className="font-bold text-xl">Projects</h1>
          <Projects data={projectFillerData} />
        </section>
        <a id="skills" className="top-[-250px]"></a>
        <section className="pt-6 " id="">
          <h1 className="font-bold text-xl">Skills</h1>
          <Skills  skillsData={skillsData}/>
        </section>
        <a id="experiences" className="top-[-250px]"></a>
        <section className="pt-6" id="">
          <h1 className="font-bold text-xl">Experiences</h1>
          <Experiences />
        </section>
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
