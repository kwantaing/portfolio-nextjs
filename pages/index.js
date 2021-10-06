import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";

export default function Home() {
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
        <h1 className="font-bold text-xl p-5">Projects</h1>
          <Projects/>
				</section>
				<section className="pt-6" id="skills">
        <h1 className="font-bold text-xl p-5">Skills</h1>
          <Skills/>
				</section>
				<section className="pt-6" id="projects">
        <h1 className="font-bold text-xl p-5">Experiences</h1>
          <Experiences/>
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
