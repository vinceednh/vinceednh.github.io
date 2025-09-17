"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [page, setPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 2 : 6);
    };
    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setPage((prev) => Math.min(prev + 1, totalPages - 1));

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
            className={`cursor-pointer ${page === 0 ? "pointer-events-none opacity-50" : ""}`}
          />
          <FaArrowRight
            size={30}
            onClick={handleNext}
            className={`cursor-pointer ${page === totalPages - 1 ? "pointer-events-none opacity-50" : ""}`}
          />
        </div>
      </div>
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2`}>
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
