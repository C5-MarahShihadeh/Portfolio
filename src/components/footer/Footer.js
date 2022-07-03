import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Marah-SH</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/marahshihadeh/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/MarahShihadeh" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/marah.shihadeh" target="_blank" rel="noreferrer" ><FaFacebookSquare /></a>

      </div>
    </footer>
  )
}

export default Footer