"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const sections = [
    { name: "games / projects", id: "projects" },
    { name: "experiences", id: "experiences" },
    { name: "skills", id: "skills" },
  ];

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
          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover-highlight hover-underline cursor-pointer px-5 py-2 text-sm font-semibold"
            >
              {section.name.toUpperCase()}
            </ScrollLink>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="relative z-50 flex flex-col items-center justify-center space-y-1 md:hidden"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white-100 block h-0.5 w-6 origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="bg-white-100 block h-0.5 w-6"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white-100 block h-0.5 w-6 origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-y-10 bg-black/60 backdrop-blur-sm md:hidden"
          >
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <ScrollLink
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="text-white-100 cursor-pointer text-3xl font-semibold hover:text-blue-300"
                >
                  {section.name.toUpperCase()}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
