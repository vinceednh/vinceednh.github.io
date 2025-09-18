"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { FC } from "react";

interface ExperienceCardProps {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  icon: StaticImageData;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  company,
  position,
  location,
  duration,
  description,
  icon,
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-8 text-gray-100 md:flex-row">
      {/* Icon */}
      <div className="h-16 w-16 flex-shrink-0">
        <Image
          src={icon}
          alt={`${company} icon`}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Main Info */}
      <div className="flex flex-1 flex-col gap-5">
        {/* Company & Position */}
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-3xl font-semibold">{company}</p>
            <p className="text-xl">{position}</p>
          </div>

          <div className="mt-2 flex flex-col items-start md:mt-0 md:items-end md:text-lg">
            <p>{location}</p>
            <p>{duration}</p>
          </div>
        </div>

        {/* Description */}
        <ul className="md:text-md flex list-inside list-disc flex-col gap-2 md:gap-5">
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
