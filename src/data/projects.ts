import superhawt from "@/public/projects/Superhawt.webp";
import sisyphus from "@/public/projects/Sisyphus.webp";
import acm from "@/public/projects/ACM.webp";
import unload from "@/public/projects/Unload.webp";
import shootergame from "@/public/projects/ShooterGame.webp";

import { TbBrandCSharp } from "react-icons/tb";
import {
  SiUnrealengine,
  SiUnity,
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
    title: "Superhawt",
    image: superhawt,
    description:
      "A VR clone of Superhot built in Unity 6 with a team of 3. Features time-manipulation mechanics, VR hand tracking via Meta SDK, enemy AI with ragdoll physics, and rigged animations.",
    icons: [SiUnity, TbBrandCSharp],
    github: "https://github.com/vinceednh/project-superhot-vr",
  },
  {
    title: "Sisyphus",
    image: sisyphus,
    description:
      "A horror roguelike RPG built in Unity 6 with a team of 5. Play as a moth navigating a dark forest, lighting campfires to survive enemy waves.",
    icons: [SiUnity, TbBrandCSharp],
    github: "https://github.com/vinceednh/project-sisyphus",
  },
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
