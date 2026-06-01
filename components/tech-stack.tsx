import Image from "next/image";

// import: assets
import techStack from "@/public/tech-stack";

// import: components
import SectionHeading from "@/components/section-heading";

const TECH_STACK_ITEMS = [
  techStack.nextjs,
  techStack.react,
  techStack.redux,
  techStack.typescript,
  techStack.javascript,
  techStack.html,
  techStack.css,
  techStack.sass,
];

export default function TechStack() {
  return (
    <section className="tech-stack-section flex flex-col items-center gap-3">
      <SectionHeading mainText="Tech Stack" outerClassName="ms-auto h-[1em]" />
      <div className="tech-stack flex flex-wrap justify-center">
        {TECH_STACK_ITEMS.map((tech) => (
          <div key={tech.label} className="flex items-center gap-1 lg:gap-3">
            <Image className="w-6 h-6 lg:w-10 lg:h-10 uppercase" src={tech.icon} alt={`${tech.label} logo`} width={40} height={40} />
            <span className="text-base lg:text-xl uppercase">{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}