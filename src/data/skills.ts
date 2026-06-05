import ue5 from "../../public/icons/Unreal.svg";
import unity from "../../public/icons/Unity.svg";
import cplusplus from "../../public/icons/C++.svg";
import csharp from "../../public/icons/C-Sharp.svg";
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
    list: "UE5, Unity 6, C++, C#",
    icons: [ue5, unity, cplusplus, csharp],
  },
  {
    title: "Front-End & UI/UX",
    list: "React, Next.js, TypeScript, Tailwind CSS, Figma",
    icons: [react, nextjs, typescript, tailwind, figma],
  },
  {
    title: "Programming & Scripting",
    list: "C++, C#, Python, TypeScript",
    icons: [cplusplus, csharp, python, typescript],
  },
  {
    title: "Tooling & Collaboration",
    list: "VS Code, Git, GitHub, Figma",
    icons: [vscode, git, github, figma],
  },
];

export default skills;
