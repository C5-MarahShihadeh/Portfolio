import React from 'react';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='my-photo' src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
           
          </div>
          <p>I have been preparing myself as a full-stack developer for the past 6 months, and I have extensive experience with both front-end and back-end development. I have worked on projects, from small personal projects to large team projects. My experience has given me the opportunity to work with many different technologies, including, JavaScript, HTML5, CSS3, React js, MongoDB Server, SQL Server, Entity Framework, jQuery, Node.js, and more.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro