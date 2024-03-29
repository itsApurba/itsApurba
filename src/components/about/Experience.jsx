import React from "react";

const experienceContent = [
  {
    year: "2019 - Present",
    position: "Freelance",
    compnayName: "Consultant",
    details: `I work with some online and local businesses to improve their website's design optimization and engagement. Refactoring and redesigns`,
  },
  // {
  //   year: "   2022 - Present",
  //   position: " Web Developer",
  //   compnayName: "Envato",
  //   details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
  //       adipisicing elit`,
  // },
  // {
  //   year: "2013 - 2018",
  //   position: " UI/UX Designer",
  //   compnayName: "Themeforest",
  //   details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
  //       elit, tempor incididunt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.position}
            <span className='place open-sans-font'>{val.compnayName}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
