import Navbar from "../components/Navbar/Navbar";
import HeadTag from "../components/HeadTag/HeadTag";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import MyExperience from "../components/MyExperience/MyExperience";
import MySkills from "../components/MySkills/MySkills";
import MyProjects from "../components/MyProjects/MyProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 200,
      once: true,
      anchorPlacement: "center-bottom",
    });
  });

  return (
    <>
      <HeadTag />
      <main>
        <Navbar />
        <Hero data-aos="fade-up" />
        <About data-aos="fade-up" />
        <MyExperience data-aos="fade-up" />
        <MySkills data-aos="fade-up" />
        <MyProjects data-aos="fade-up" />
      </main>
    </>
  );
}
