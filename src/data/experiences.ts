import acm from "../../public/icons/ACM.svg";
import gamespawn from "../../public/icons/Gamespawn.svg";
import ucr from "../../public/icons/UCR.svg";
import bobaful from "../../public/icons/Bobaful.svg";

const experiences = [
  {
    company: "University of California, Riverside",
    position: "Teaching Assistant - Python Grader",
    location: "Riverside, CA",
    duration: "Oct 2024 - Present",
    description: [
      "Grading Python assignments for introductory computer science courses with attention to code logic, readability, and efficiency using Gradescope.",
      "Importing and managing student grades between ZyBooks and Canvas to maintain accurate records.",
      "Participating in weekly update meetings with the course instructor to review grading consistency, clarify expectations, and discuss student progress.",
      "Providing constructive feedback to students and assisting with debugging and conceptual understanding as needed.",
    ],
    icon: ucr,
  },
  {
    company: "GameSpawn",
    position: "Game Programmer/Designer",
    location: "Riverside, CA",
    duration: "Oct 2024 - Present",
    description: [
      "Developing gameplay systems and implementing features in Unreal Engine 5.4 using Blueprints and C++.",
      "Collaborating within a role-based Agile environment with team members working asynchronously.",
      "Managing project assets and source control using Git and GitHub integration within Unreal Engine.",
      "Conducting playtesting and iterating on game mechanics based on team feedback.",
    ],
    icon: gamespawn,
  },
  {
    company: "ACM@UCR",
    position: "ACM Spark",
    location: "Riverside, CA",
    duration: "Mar 2025 - Jun 2025",
    description: [
      "Collaborating in an Agile team to design and develop the official ACM@UCR website.",
      "Building dynamic, responsive interfaces using React, Tailwind CSS, and TypeScript.",
      "Participating in weekly sprint meetings to share progress, perform code reviews, and ensure project milestones are met.",
      "Utilizing Git and GitHub for version control and collaborative development.",
    ],
    icon: acm,
  },
  {
    company: "Bobaful",
    position: "Barista Trainer",
    location: "Monterey Park, CA",
    duration: "Aug 2023 - Jan 2025",
    description: [
      "Trained and onboarded new team members in drink preparation, customer service, and store operations, contributing to a more efficient and cohesive team.",
      "Maintained high-quality standards in beverage crafting and food safety in a fast-paced environment.",
      "Delivered excellent customer service through clear communication, adaptability, and multitasking during peak hours.",
    ],
    icon: bobaful,
  },
];

export default experiences;
