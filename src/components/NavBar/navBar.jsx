/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import picture from '../../../assets/Jimenez RaulAngel04_RMussapp.jpg'

const NavBar = () => {
  const h = 'jj'

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img
            src={picture}
            alt="profile"
          />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Portfolios" exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 Raul Angel Jimenez H.</p>
        </footer>
      </nav>
    </div>
  )
}

export default NavBar
