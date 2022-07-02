import React from 'react';
import IMG1 from '../../assets/beautyRecipe.png';
import IMG4 from '../../assets/fake.png';



import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Beauty Recipe',
      img: IMG1,
      brief:'An online store which name is Beauty Recipe was developed to help customers to buy beauty products like makeup,skin care,hair,fragrance,bath and body & tools and brushes ,also they can sell their beauty product, i tryed to make a simple design to help the customers to use the website .',
      link: 'test',
    },
    {
      id: 2,
      title: 'Big Bite',
      img: IMG4,
      brief:'An online restaurant website which name is Big Bite was developed to help customers to buy foods and deserts and drinks,Also there is an admin side where the admin can add foods, update and delete ,we tryed to make a simple design to help the customers to use the website .',
      link: 'https://bigbiteproject.netlify.app/',
    },
   
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <p className='brief'>{pro.brief}</p>
          <div className="portfolio__item-cta">
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio