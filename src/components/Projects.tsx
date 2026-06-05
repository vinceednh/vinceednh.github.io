"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Transition } from "motion/react";
import { wrap } from "@popmotion/popcorn";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

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

const Projects = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setProjectsPerPage(1 * 2);
      } else if (width < 1280) {
        setProjectsPerPage(3 * 2);
      } else {
        setProjectsPerPage(4 * 1);
      }
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

  useEffect(() => {
    setLoaded(true);
  }, []);

  const nextPage = () => {
    setDirection(1);
    setPage((prev) => wrap(0, totalPages, prev + 1));
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((prev) => wrap(0, totalPages, prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      diff > 0 ? nextPage() : prevPage();
    }
  };

  return (
    <motion.div
      id="projects"
      className="bg-gray-100 px-8 py-20 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-5xl font-semibold">GAMES / PROJECTS</h1>
        <div className="flex gap-4">
          <button
            onClick={prevPage}
            className="cursor-pointer text-5xl transition-colors duration-200 hover:text-blue-100"
          >
            <FaCaretLeft />
          </button>
          <button
            onClick={nextPage}
            className="cursor-pointer text-5xl transition-colors duration-200 hover:text-blue-100"
          >
            <FaCaretRight />
          </button>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: containerHeight }}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
            className="absolute top-0 left-0 grid w-full grid-cols-1 grid-rows-2 gap-6 pt-3 md:grid-cols-3 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > page ? 1 : -1);
              setPage(idx);
            }}
            className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-300 ${
              idx === page ? "bg-blue-100" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
