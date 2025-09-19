"use client";
import { motion } from "motion/react";
import { FaLinkedin, FaFileCsv } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const fadeInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const Intro = () => {
  return (
    <div className="text-white-100 relative flex flex-col items-center justify-between px-8 py-20 md:flex-row md:items-start md:px-16">
      <div className="flex max-w-xl flex-col gap-6">
        <motion.h1 {...fadeInFromLeft} className="text-6xl font-bold">
          Vincent Dinh
        </motion.h1>
        <motion.h2
          {...fadeInFromLeft}
          transition={{ ...fadeInFromLeft.transition, delay: 0.2 }}
          className="color-blue-100 text-3xl font-semibold"
        >
          Game Programmer
        </motion.h2>
        <motion.p
          {...fadeInFromLeft}
          transition={{ ...fadeInFromLeft.transition, delay: 0.4 }}
          className="text-xl"
        >
          Aspiring Game Developer, learning Unreal Engine 5 and building
          interactive gameplay systems. Skilled in C++ and web technologies,
          passionate about creating immersive and polished game experiences.
        </motion.p>
      </div>

      <div className="mt-8 flex justify-center gap-6 md:mt-0 md:flex-col md:justify-start">
        <motion.a
          href="https://linkedin.com/in/vincent-dnh"
          target="_blank"
          rel="noreferrer"
          className="text-white-100 transition-colors duration-300 hover:scale-110 hover:text-blue-400"
          {...fadeInFromLeft}
          transition={{ ...fadeInFromLeft.transition, delay: 0.6 }}
        >
          <FaLinkedin size={40} />
        </motion.a>
        <motion.a
          href="https://github.com/vinceednh"
          target="_blank"
          rel="noreferrer"
          className="text-white-100 transition-colors duration-300 hover:scale-110 hover:text-gray-400"
          {...fadeInFromLeft}
          transition={{ ...fadeInFromLeft.transition, delay: 0.7 }}
        >
          <BsGithub size={40} />
        </motion.a>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-white-100 transition-colors duration-300 hover:scale-110 hover:text-green-400"
          {...fadeInFromLeft}
          transition={{ ...fadeInFromLeft.transition, delay: 0.8 }}
        >
          <FaFileCsv size={40} />
        </motion.a>
        <motion.a
          href="mailto:vincent.dinh401@gmail.com"
          className="text-white-100 transition-colors duration-300 hover:scale-110 hover:text-red-400"
          {...fadeInFromLeft}
          transition={{ ...fadeInFromLeft.transition, delay: 0.9 }}
        >
          <CiMail size={40} />
        </motion.a>
      </div>
    </div>
  );
};

export default Intro;
