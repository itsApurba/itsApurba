import React from "react";

const educationContent = [
  {
    year: "2018",
    degree: "DOM CCA",
    institute: "Ahead Setu",
    details: `  8 Months certification course of office management and computer application`,
  },
  {
    year: "2018",
    degree: "SSC & HSC",
    institute: "SEWLI HIGH SCHOOL",
    details: `Completed intermediate studies (WBBSE board)`,
  },
  // {
  //   year: "2009",
  //   degree: "BACHELOR DEGREE ",
  //   institute: "TUNIS HIGH SCHOOL",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.degree}
            <span className='place open-sans-font'>{val.institute}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
