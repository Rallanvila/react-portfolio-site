import Navbar from '@/components/Navbar/Navbar';
import HeadTag from '@/components/HeadTag/HeadTag';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import MyExperience from '@/components/MyExperience/MyExperience';
import MySkills from '@/components/MySkills/MySkills';
import { ProjectGrid } from '@/components/MyProjects/ProjectGrid';

export default function Home() {
  return (
    <>
      <HeadTag />
      <main>
        <Navbar />
        <Hero />
        <About />
        <MyExperience />
        <MySkills />
        <ProjectGrid />
      </main>
    </>
  );
}
