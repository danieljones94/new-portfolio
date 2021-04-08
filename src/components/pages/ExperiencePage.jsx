import React from "react";
import ExperienceCard from "../ExperienceCard";

const ExperiencePage = (props) => {
  return (
    <>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <ExperienceCard jobInfo={props.experience[0]} />;
      <ExperienceCard jobInfo={props.experience[1]} />;
    </>
  );
};

export default ExperiencePage;
