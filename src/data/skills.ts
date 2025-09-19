import ue5 from "../../public/icons/Unreal.svg";
import cplusplus from "../../public/icons/C++.svg";
import python from "../../public/icons/Python.svg";
import typescript from "../../public/icons/Typescript.svg";
import react from "../../public/icons/REACT.svg";
import tailwind from "../../public/icons/Tailwindcss.svg";
import github from "../../public/icons/Github.svg";
import vscode from "../../public/icons/VSCode.svg";
import nextjs from "../../public/icons/nextjs.svg";
import git from "../../public/icons/git.svg";
import figma from "../../public/icons/Figma.svg";

const skills = [
  {
    title: "Game Development",
    list: "Unreal Engine 5, C++, Git, GitHub",
    icons: [ue5, cplusplus, git, github],
  },
  {
    title: "Front-End & UI/UX",
    list: "Next.js, React, Tailwind CSS, Figma",
    icons: [nextjs, react, tailwind, figma],
  },
  {
    title: "Programming & Scripting",
    list: "Python, TypeScript",
    icons: [python, typescript],
  },
  {
    title: "Tooling & Collaboration",
    list: "VS Code, Git, GitHub",
    icons: [vscode, git, github],
  },
];

export default skills;
