import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Apurba Adhikary</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a href='#skills' className='footer__link'>
              Skills
            </a>
          </li>
          {/* <li>
            <a href='#' className='footer__link'></a>
          </li> */}
        </ul>

        <div className='footer__social'>
          <a
            href='https://github.com/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i class='bx bxl-linkedin'></i>
          </a>
          <a
            href='https://github.com/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i class='bx bxl-github'></i>
          </a>
          {/* <a
            href='https://github.com/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          ></a> */}
        </div>

        <span className='footer__copy'>&#169; All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
