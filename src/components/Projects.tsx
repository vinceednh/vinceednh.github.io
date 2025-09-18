"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion, wrap } from "motion/react";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [page, setPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  const [direction, setDirection] = useState<1 | -1>(1);

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
    const nextPage = wrap(0, totalPages, page - 1);
    setDirection(-1);
    setPage(nextPage);
  };

  const handleNext = () => {
    const nextPage = wrap(0, totalPages, page + 1);
    setDirection(1);
    setPage(nextPage);
  };

  const currentProjects = projects.slice(
    page * projectsPerPage,
    page * projectsPerPage + projectsPerPage,
  );

  return (
    <div className="px-8 py-10 md:px-16" id="projects">
      <div className="text-white-100 mb-10 flex items-center justify-between">
        <h1 className="text-5xl font-semibold">GAMES / PROJECTS</h1>
        <div className="flex gap-4">
          <FaArrowLeft
            size={30}
            onClick={handlePrev}
            className={`cursor-pointer transition-colors duration-200 hover:text-blue-100 ${page === 0 ? "pointer-events-none opacity-50" : ""}`}
          />
          <FaArrowRight
            size={30}
            onClick={handleNext}
            className={`cursor-pointer transition-colors duration-200 hover:text-blue-100 ${page === totalPages - 1 ? "pointer-events-none opacity-50" : ""}`}
          />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            exit={{
              x: direction * -300,
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="grid grid-cols-1 gap-6 pt-3 md:grid-cols-3 md:grid-rows-2"
          >
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
