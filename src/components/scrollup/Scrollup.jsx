import React from "react";
import "./scrollup.css";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const Scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 560) Scrollup.classList.add("show-scroll");
    else Scrollup.classList.remove("show-scroll");
  });
  return (
    <a href='#' className='scrollup'>
      <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  );
};

export default Scrollup;
