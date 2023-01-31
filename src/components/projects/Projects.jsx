import React from 'react'
import './projects.css'
import project1 from '../../assests/portfolio1.jpg'

const Data = [
  {
    id: 1,
    img: project1,
    github: 'www.github.com',
    demo: 'www.github.com',
    title: 'Project title'
  },
  {
    id: 2,
    img: project1,
    github: 'www.github.com',
    demo: 'www.github.com',
    title: 'Project title'
  },
  {
    id: 3,
    img: project1,
    github: 'www.github.com',
    demo: 'www.github.com',
    title: 'Project title'
  },
  {
    id: 4,
    img: project1,
    github: 'www.github.com',
    demo: 'www.github.com',
    title: 'Project title'
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>Take A Look At</h5>
      <h2>My Projects</h2>

      <div className="container projects__container">
        {
          Data.map(({id, img, github, demo, title}) => {
            return (
              <article key={id} className="projects__item">
                <div className="projects__item-image">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="projects__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
