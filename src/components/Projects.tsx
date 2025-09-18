"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Transition } from "motion/react";
import { wrap } from "@popmotion/popcorn";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const sliderTransition: Transition = {
  type: "tween",
  duration: 0.5,
  ease: "easeInOut",
};

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  active: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const ProjectsCarousel = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 2 : 6);
    };
    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    page * projectsPerPage,
    page * projectsPerPage + projectsPerPage,
  );

  useEffect(() => {
    if (slideRef.current) {
      setContainerHeight(slideRef.current.offsetHeight);
    }
  }, [currentProjects]);

  const nextPage = () => {
    setDirection(1);
    setPage((prev) => wrap(0, totalPages, prev + 1));
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((prev) => wrap(0, totalPages, prev - 1));
  };

  return (
    <div className="bg-gray-100 px-8 py-20 md:px-16">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-5xl font-semibold">GAMES / PROJECTS</h1>
        <div className="flex gap-4">
          <button
            onClick={prevPage}
            className="cursor-pointer text-4xl transition-colors duration-200 hover:text-blue-100"
          >
            ◀
          </button>
          <button
            onClick={nextPage}
            className="cursor-pointer text-4xl transition-colors duration-200 hover:text-blue-100"
          >
            ▶
          </button>
        </div>
      </div>
      <div
        className="relative w-full overflow-hidden"
        style={{ height: containerHeight }}
        ref={containerRef}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            ref={slideRef}
            key={page}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            className="absolute top-0 left-0 grid w-full grid-cols-1 gap-6 pt-3 md:grid-cols-3 md:grid-rows-2"
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

export default ProjectsCarousel;
