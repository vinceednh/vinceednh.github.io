"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa6";

const fadeInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const Intro = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="text-white-100 relative flex flex-col items-center justify-between px-8 py-20 md:flex-row md:items-start md:px-16">
      <div className="flex max-w-xl flex-col gap-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-5">
          <motion.div
            {...fadeInFromLeft}
            transition={{ ...fadeInFromLeft.transition, delay: 0.1 }}
            className="shrink-0"
          >
            <Image
              src="/icons/profile.webp"
              alt="Vincent Dinh"
              width={96}
              height={96}
              className="mb-2 h-40 w-40 rounded-full object-cover ring-2 ring-white/20 md:mb-0 md:h-50 md:w-50"
            />
          </motion.div>
          <div className="flex flex-col gap-2">
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
          </div>
        </div>
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

      <div className="mt-8 flex justify-center gap-8 md:mt-0 md:flex-col md:justify-start">
        {/* LinkedIn */}
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

        {/* GitHub */}
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

        {/* Resume */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-white-100 transition-colors duration-300 hover:scale-110 hover:text-green-400"
          {...fadeInFromLeft}
          transition={{ ...fadeInFromLeft.transition, delay: 0.8 }}
        >
          <FaRegFilePdf size={40} />
        </motion.a>

        <div className="group relative flex items-center justify-center">
          <motion.div
            onClick={() => setShowEmail(!showEmail)}
            className="text-white-100 cursor-pointer transition-colors duration-300 hover:scale-110 hover:text-red-400"
            {...fadeInFromLeft}
            transition={{ ...fadeInFromLeft.transition, delay: 0.9 }}
          >
            <CiMail size={40} />
          </motion.div>

          {/* Tooltip on the left */}
          <div
            className={`absolute right-full mr-3 w-max rounded-md bg-white/90 px-3 py-1 text-sm text-black shadow-lg transition-opacity duration-200 ${showEmail ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
          >
            vincent.dinh401@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
