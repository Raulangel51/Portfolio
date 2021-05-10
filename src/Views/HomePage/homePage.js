/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Typical from 'react-typical'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const h = ' hoa'

  return (
    <div className="HomePage">
      <header className="hero">
        <div className="hero-text-container">
          <h1 className="hero-text">
            Hi, I&apos;m Raul Angel J.
            {' '}
            <Typical
              className="dynamic"
              loop={Infinity}
              wrapper="b"
              steps={[
                'Software Engineer',
                1000,
                'Web Developer 💻',
                1000,
                'Visionary ⚡',
                1000,
                'Freelancer 🌐',
                1000,
              ]}
            />
          </h1>
        </div>
        <p className="hp-sub-text">
          Knack of building applications with front and back end operations.
        </p>
        <div className="icons">
          <a /* Los componentes a pueden ser Link? */
            className="icon-holder"
            href="https://www.facebook.com/raulangel.jimenezhernandez"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            className="icon-holder"
            href="https://github.com/Raulangel51"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            className="icon-holder"
            href="https://www.instagram.com/raulangel51/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon insta" />
          </a>
        </div>
      </header>
    </div>
  )
}

export default HomePage
