"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
        scrolled
          ? "bg-black-111 text-white-100"
          : "text-white-100 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:justify-start">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mr-15 cursor-pointer text-xl font-bold tracking-wide"
        >
          VINCENT DINH
        </button>

        <div className="hidden space-x-10 md:flex">
          {/* Projects scroll */}
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80} // adjust for navbar height
            className="hover-highlight hover-underline cursor-pointer px-5 py-2 text-sm font-semibold"
          >
            GAMES/PROJECTS
          </ScrollLink>
          <button
            className="hover-highlight hover-underline px-3 py-2 text-sm font-semibold"
            onClick={() => {
              // TODO: react-scroll
            }}
          >
            EXPERIENCE
          </button>
          <button
            className="hover-highlight hover-underline px-3 py-2 text-sm font-semibold"
            onClick={() => {
              // TODO: react-scroll
            }}
          >
            SKILLS
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
