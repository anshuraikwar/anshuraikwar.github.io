import Image from "next/image";
import "./index.css";
import techStack from "@/public/tech-stack";
import ABPF from "./components/ABPF";
import Samphora from "./components/samphora";
import Rollout from "./components/rollout";
import ScrollTransformExploration from "./components/scroll-transform-exploration";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import BookLore from "./components/booklore";

export default function Projects() {
  const details = (index: number, details: { bgColor?: string; title: string; description: React.ReactNode; techStack: typeof techStack[keyof typeof techStack][]; github: string; link: string }) => (
    <div className={`project-details-card font-mono ${index % 2 === 0 ? 'lg:right-0' : 'lg:left-0'}`}>
      <div
        className="lg:h-full w-full rounded-lg lg:rounded-[48px] p-4 lg:p-14 flex flex-col gap-4 lg:justify-between items-start"
        style={{
          backdropFilter: "blur(24px)",
          backgroundColor: details.bgColor,
        }}>
        <div className="text-lg lg:text-3xl">
          {details.title}
        </div>
        <div className="w-full flex flex-col lg:gap-8 text-base lg:text-xl">
          <div>{details.description}</div>
          <div className="flex lg:flex-col align-end justify-between lg:gap-8">
            <div className="flex items-center gap-2">
              <div>Tech Stack:</div>
              <div className="flex flex-wrap gap-2">
                {details.techStack.map((tech) => (
                  <div key={tech.label} className="flex items-center gap-3">
                    <Image className="h-6 w-6 lg:h-8 lg:w-8" src={tech.iconWhite} alt={`${tech.label} logo`} width={40} height={40} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={details.github} target="_blank" rel="nonopener" className="border border-[white]">
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={details.link} target="_blank" rel="nonopener" className="border border-[white]">
                <Image
                  src="/link.svg"
                  alt="Link"
                  width={36}
                  height={36}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="projects-section flex flex-col items-center gap-3 md:gap-12">
      <SectionHeading mainText="Projects" outerClassName="heading ms-auto" />

      <div className="w-full flex flex-col">
        <div className="project-sub-section bg-[#070918] flex items-center overflow-hidden relative">
          <div className="block h-full md:hidden">
            <Image
              src="/assets/ABPF.png"
              alt="Ancient Bristlecone Pine Forest project preview"
              width={640}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden md:block">
            <ABPF />
          </div>
          {details(0, {
            title: "ANCIENT BRISTLECONE PINE FOREST",
            description: "Web App featuring a SVG based cursor trackable 3D animation of a topographic map, implemented by simple CSS transitions.",
            techStack: [techStack.html, techStack.css, techStack.javascript],
            github: "https://github.com/anshuraikwar/ABPF",
            link: "https://anshuraikwar.github.io/ABPF/",
          })}
        </div>

        <div className="project-sub-section lg:pe-[11vw] flex flex-col lg:flex-row justify-between items-center overflow-hidden relative">
          <div
            className="absolute left-0 w-[30%] h-full hidden lg:block"
            style={{
              backgroundImage: 'url("/assets/scroll-transform-exploration/img/hulu-tv-full.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
            }}
          />
          {details(1, {
            bgColor: "rgba(0,0,0,0.2)",
            title: "EXPERIMENT WITH 3D TRANSITIONS",
            description: <>Recreation of <Link className="underline" href="https://natesmith.design/scroll-transform-exploration" target="_blank" rel="noopener noreferrer">this beautiful website</Link> showcasing advanced 3D transformations, built on React.</>,
            techStack: [techStack.react],
            github: "https://github.com/anshuraikwar/scroll-transform-exploration",
            link: "https://anshuraikwar.github.io/scroll-transform-exploration/",
          })}
          <div className="block h-full md:hidden">
            <Image
              src="/assets/scroll-transform-exploration/img/preview.png"
              alt="Scroll Transform Exploration project preview"
              width={640}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden md:flex h-full w-full">
            <ScrollTransformExploration />
          </div>
        </div>

        <div className="project-sub-section bg-[#1E1E1E] flex items-center overflow-hidden relative">
          {details(2, {
            bgColor: "rgba(0,0,0,0.4)",
            title: "GLOBETROTTER",
            description: "Web App experimenting with simultaneous 2D animations and parallax scrolling, built on React",
            techStack: [techStack.react],
            github: "https://github.com/anshuraikwar/Globetrotter",
            link: "https://anshuraikwar.github.io/Globetrotter/",
          })}
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage: 'url("/assets/globetrotter.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div className="project-sub-section bg-[#000] flex items-center overflow-hidden relative">
          {details(3, {
            title: "SAMPHORA",
            description: "Web App with seamless hover and page transitions, while ensuring keyboard accessibility, built on React.",
            techStack: [techStack.react],
            github: "https://github.com/anshuraikwar/samphora",
            link: "https://anshuraikwar.github.io/samphora/",
          })}
          <div className="block h-full md:hidden">
            <Image
              src="/assets/samphora/img/preview.png"
              alt="Samphora project preview"
              width={640}
              height={640}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden md:flex h-full w-full">
            <Samphora />
          </div>
        </div>

        <div className="project-sub-section flex items-center overflow-hidden relative">
          {details(4, {
            bgColor: "rgba(0,0,0,0.4)",
            title: "ROLLOUT",
            description: "Web App showcasing a rollout animation implemented using plain HTML and CSS, built on React.",
            techStack: [techStack.react],
            github: "https://github.com/anshuraikwar/rollout",
            link: "https://anshuraikwar.github.io/Rollout/",
          })}
          <div className="block h-full md:hidden">
            <Image
              src="/assets/rollout/img/preview.png"
              alt="Rollout project preview"
              width={640}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden md:flex h-full w-full">
            <Rollout />
          </div>
        </div>

        <div className="project-sub-section flex flex-col lg:flex-row justify-end items-center overflow-hidden relative">
          <div
            className="absolute left-0 top-10 bottom-0 w-[45%] hidden lg:block"
            style={{
              backgroundImage: 'url("/assets/booklore/booklore.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'right',
            }}
          />
          {details(1, {
            bgColor: "rgba(0,0,0,0.2)",
            title: "BOOKLORE",
            description: 'BookLore is an immersive digital bookshelf built with Next.js, React, and TypeScript. Features a realistic 3D book animation that rotates and gradually opens to reveal its pages, creating an experience inspired by physical books.',
            techStack: [techStack.nextjs, techStack.typescript, techStack.css],
            github: "https://github.com/anshuraikwar/BookLore",
            link: "https://anshuraikwar.github.io/BookLore/",
          })}

          <div className="flex h-full w-full lg:w-[60%] pe-10 sm:pe-40 lg:pe-0 ms-auto">
            <BookLore />
          </div>
        </div>
      </div>
    </section>
  );
}