"use client";

import { motion } from "motion/react";
import Image from "next/image";
import skills from "@/data/skills";

const Skills = () => {
  const topRow = skills.slice(0, 2);
  const bottomRow = skills.slice(2, 4);

  return (
    <section
      className="bg-white-100 w-full px-8 py-20 text-gray-100 md:px-16"
      id="skills"
    >
      <h2 className="mb-10 text-5xl font-semibold">SKILLS</h2>

      <div className="mb-6 flex flex-col gap-6 md:flex-row">
        {topRow.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center rounded-3xl bg-white/30 px-6 py-10 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            style={{
              flex: idx === 0 ? 1.3 : 1,
            }}
          >
            <h3 className="mb-2 text-center text-2xl font-semibold text-gray-100">
              {skill.title}
            </h3>
            <p className="mb-4 text-center text-lg text-gray-100">
              {skill.list}
            </p>
            <div className="flex justify-center gap-3">
              {skill.icons.map((icon, i) => (
                <div key={i} className="h-13 w-13">
                  <Image
                    src={icon}
                    alt={`${skill.title} icon`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {bottomRow.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center rounded-3xl bg-white/30 px-6 py-10 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            style={{
              flex: idx === 1 ? 1.3 : 1,
            }}
          >
            <h3 className="mb-2 text-center text-2xl font-semibold text-gray-100">
              {skill.title}
            </h3>
            <p className="mb-4 text-center text-lg text-gray-100">
              {skill.list}
            </p>
            <div className="flex justify-center gap-3">
              {skill.icons.map((icon, i) => (
                <div key={i} className="h-13 w-13">
                  <Image
                    src={icon}
                    alt={`${skill.title} icon`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
