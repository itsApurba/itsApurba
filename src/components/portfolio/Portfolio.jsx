import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Recent Work</h2>

      <div className='work__filters'>
        <span className='work__item'>All</span>
        <span className='work__item'>JavaScript</span>
        <span className='work__item'>Design</span>
      </div>
    </section>
  );
};

export default Portfolio;
