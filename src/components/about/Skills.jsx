import React from "react";

const skillsContent = [
  { skillClass: "p80", skillPercent: "80", skillName: "HTML" },
  { skillClass: "p50", skillPercent: "50", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
  { skillClass: "p50", skillPercent: "50", skillName: "NODEJS" },
  { skillClass: "p52", skillPercent: "52", skillName: "express" },
  { skillClass: "p66", skillPercent: "66", skillName: "FIGMA" },
  { skillClass: "p95", skillPercent: "56", skillName: "Git" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className='slice'>
              <div className='bar'></div>
              <div className='fill'></div>
            </div>
          </div>
          <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
