import React from "react";
import Backend from "./Backend";
import Fronend from "./Fronend";
import "./skills.css";
const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My Technical Level</span>
      <div className='skills__container container grid'>
        <Fronend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
