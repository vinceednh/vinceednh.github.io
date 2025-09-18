"use client";

import { useState, useEffect, useRef } from "react";
import { motion, wrap } from "motion/react";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [page, setPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  const [direction, setDirection] = useState<1 | -1>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 2 : 6);
    };
    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrev = () => {
    setDirection(-1);
    setPage((prev) => wrap(0, totalPages, prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setPage((prev) => wrap(0, totalPages, prev + 1));
  };

  const currentProjects = projects.slice(
    page * projectsPerPage,
    page * projectsPerPage + projectsPerPage,
  );

  return (
    <div className="bg-gray-100 px-8 py-20 md:px-16" id="projects">
      <div className="text-white-100 mb-10 flex items-center justify-between">
        <h1 className="text-5xl font-semibold">GAMES / PROJECTS</h1>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer text-xl transition-colors duration-200 hover:text-blue-100"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer text-xl transition-colors duration-200 hover:text-blue-100"
          >
            ▶
          </button>
        </div>
      </div>

      <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div
          key={page}
          initial={{ x: direction * 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -300, opacity: 0 }}
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-1 gap-6 pt-3 md:grid-cols-3 md:grid-rows-2"
        >
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
