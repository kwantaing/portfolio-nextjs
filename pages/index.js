import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import { NextSeo } from "next-seo";

export default function Home({ skillsData }) {
  return (
    <>
      <NextSeo
        title="Quentin Ng - Software Engineer in React, Python, C#"
        description="Quentin Ng is a software engineer working on React, Python, and C#. He enjoys being creative with code, solving problems with algorithms, and keeping up to date with the newest technology."
        canonical="https://www.quentin-ng.com/"
      />
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <title>Quentin Ng</title>
        <link rel="icon" href="../images/siteLogos/qLogo.png" />
      </Head>
      <div className="dark:bg-gray-800 bg-white dark:text-gray-200 text-gray-700">
        <Header />
        <About />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <a id="projects"></a>
          <section className="pt-6">
            <h1 className="font-bold text-xl">Projects</h1>
            <Projects />
          </section>
          <a id="tech"></a>
          <section className="pt-6 " id="">
            <h1 className="font-bold text-xl">Tech</h1>
            <Skills skillsData={skillsData} />
          </section>
          <a id="experiences"></a>
          <section className="pt-6" id="">
            <h1 className="font-bold text-xl">Experiences</h1>
            <Experiences />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const skillsData = await fetch(
    "https://portfolio-data-qdev.s3.us-east-2.amazonaws.com/skills.json"
  ).then((res) => res.json());
  return {
    props: {
      skillsData,
    },
  };
}
