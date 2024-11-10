import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "types";
import experience from "@/data/content/experience";

type ExperienceProps = {
  overwriteExperience?: Experience[];
};

function Experience({ overwriteExperience }: ExperienceProps) {
  const experienceList = overwriteExperience ? overwriteExperience : experience;
  return (
    <>
      {experienceList.map((item) => {
        return <ExperienceCard key={item.id} experience={item} />;
      })}
    </>

  );
}

export default Experience;