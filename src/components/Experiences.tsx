"use client";

import { motion } from "motion/react";
import experiences from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      className="bg-white-100 w-full px-8 py-20 text-gray-100 md:px-16"
      id="experience"
    >
      <h2 className="mb-10 text-5xl font-semibold">EXPERIENCE</h2>

      <motion.div
        className="flex flex-col gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ExperienceCard
              company={exp.company}
              position={exp.position}
              location={exp.location}
              duration={exp.duration}
              description={exp.description}
              icon={exp.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
