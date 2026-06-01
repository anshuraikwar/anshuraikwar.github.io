import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import TheEnd from "@/components/the-end";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <TheEnd />
    </>
  );
}
