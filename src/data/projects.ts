import acm from "@/public/projects/ACM.webp";
import unload from "@/public/projects/Unload.webp";
import shootergame from "@/public/projects/ShooterGame.webp";
import {
  SiUnrealengine,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrettier,
  SiEslint,
} from "react-icons/si";

const projects = [
  {
    title: "ACM Website",
    image: acm,
    description:
      "ACM@UCR’s official website built with Next.js and Tailwind CSS.",
    icons: [
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiReact,
      SiEslint,
      SiPrettier,
    ],
    github: "https://github.com/acm-ucr/acm-atlas",
    link: "https://acm.cs.ucr.edu/",
  },
  {
    title: "Unload (WIP)",
    image: unload,
    description:
      "A work-in-progress game developed by a team using Unreal Engine blueprints.",
    icons: [SiUnrealengine],
    github: "https://github.com/HiImCVH/Unload",
  },
  {
    title: "3D Shooter Game",
    image: shootergame,
    description:
      "A simple 3D shooter game developed using Unreal Engine C++. Course project from GameDev.tv, with added features.",
    icons: [SiUnrealengine, SiCplusplus],
  },
];

export default projects;
