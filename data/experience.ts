import { ExperienceData } from "@/types/experience.type";

export const EXPERIENCE_DATA: ExperienceData = {
  "Oblivious": {
    role: "Frontend Engineer",
    duration: "June 2024 - Present",
    responsibilities: [
      "Delivered a dynamic, node-based visual editor using React Flow for managing complex multi-table database schemas, featuring interactive management of entity relationships, real-time metadata editing and instant validation feedback.",
      {
        text: "Migrated a React.js codebase to Next.js, boosting the performance score from 49 to 98 and improving load efficiency.",
        subpoints: [
          "Implemented Server-Side Rendering, improved SEO, cut load times by over 85% (FCP: 1.3s to 0.3s, LCP: 2.9s to 0.4s).",
          "Integrated middleware for server-side authentication and role-based access control (RBAC), enhancing security."
        ],
      },
      "Wrote unit tests with Jest to validate UI components rendering and state management.",
      "Took ownership of the WebdriverIO-based QA process for a core project, independently managing the automated regression test suite framework and increasing test coverage.",
      "Contributed in development of Jekyll-based Differential Privacy Registry for OpenDP and Harvard University."
    ],
    skills: ["Next.js", "React.js", "Redux", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "SWR", "Jest", "Vitest", "WebdriverIO", "Docusaurus", "Jekyll", "Carbon Design System", "Radix UI"]
  },
  "Walfin Tech Private Limited": {
    role: "Web Developer",
    duration: "July 2022 - March 2024",
    responsibilities: [
      {
        text: "Rendernet - online tool to generate images using generative AI - React | Redux | WebSockets.",
        subpoints: [
          "Primary web developer responsible for independently delivering multiple key features.",
          "Single-handedly developed feature to enable concurrent real-time interactions within the app via WebSockets, resulting in a 40% increase in user engagement."
        ],
      },
      {
        text: "ToadCash - a mobile app that enables payments with crypto - Flutter.",
        subpoints: [
          "Contributed to the development of a mobile app built with Flutter.",
        ],
      },
      {
        text: "RoverX - blockchain analytics web app - React | Redux",
        subpoints: [
          "Led the development of a feature to render large data sets in the UI using a tabular format.",
          "Improved app performance by 30% by reducing response times and optimising the number of re-renders. Achieved this by identifying and eliminating bottlenecks, minimising code redundancy, implementing memoized selectors with the Reselect library, and leveraging concepts such as memoization, lazy loading, and efficient list key management.",
          "Added support for up to 200 dynamic filters and generating shareable links with filters applied."
        ],
      },
    ],
    skills: ["React.js", "Redux", "TypeScript", "JavaScript", "WebSockets", "HTML", "CSS", "Jest", "Chart.js", "Lottie", "Firebase", "Flutter", "MUI",]
  },
  "Capgemini": {
    role: "Senior Software Engineer",
    duration: "Aug 2021 - July 2022",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL", "PL/SQL", "Java", "Spring Boot"],
  },
  "Edvora, Starwisp Industries": {
    role: "Frontend Engineer Intern",
    duration: "Jan 2021 - June 2021",
    responsibilities: ["Contributed in development of 7 React JS projects. Collaborated on designing mockups and wireframes, developing fully responsive websites for seamless cross-browser and multi-platform compatibility on desktop and mobile devices."],
    skills: ["Next.js", "React.js", "JavaScript", "HTML", "CSS", "SSCSS", "Styles components"],
  },
  "PanaLabs": {
    role: "Full Stack Intern",
    duration: "Dec 2019 - Dec 2020",
    responsibilities: [
      "Developed full-stack application with React JS and AWS.",
      "Features include Google Maps component & location tracking based on IP address & GPS to show nearby businesses.",
      "Build a Google calendar like 2D timeline view to book appointments, user signup & sign-in via SMS OTP, autocompletion and notification features.",
    ],
    skills: ["React.js", "JavaScript", "HTML", "CSS", "AWS", "AES S3", "AWS Lambda", "AWS API Gateway", "Python", "Google Maps API"],
  },
}
