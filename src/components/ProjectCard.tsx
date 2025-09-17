"use client";

import Image, { StaticImageData } from "next/image";
import { ElementType } from "react";
import { BsGithub } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import { motion, easeInOut } from "motion/react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  icons: ElementType[];
  github: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  icons,
  github,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="relative h-80 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg md:h-96"
      whileHover={{ scale: 1.03 }}
      whileFocus={{ scale: 1.03 }}
      onClick={() => setIsOpen((prev) => !prev)}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      tabIndex={0}
    >
      <div className="h-full w-full">
        <Image src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <motion.div
        className="text-white-100 absolute bottom-0 left-0 flex h-full w-full flex-col justify-between bg-black/50 p-6"
        animate={{
          opacity: isOpen || isHover ? 1 : 0,
          y: isOpen || isHover ? 0 : "100%",
        }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <div className="overflow-hidden">
          <p className="text-3xl font-semibold break-words">{title}</p>
          <p className="mt-2 text-sm break-words md:text-base">{description}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-3xl">
            {icons.map((Icon, i) => (
              <Icon key={i} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-4 text-3xl">
          <Link
            href={github}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer transition-colors duration-200 hover:text-blue-100"
          >
            <BsGithub />
          </Link>
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transition-colors duration-200 hover:text-blue-100"
            >
              <CiGlobe />
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
