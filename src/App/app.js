import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/navBar'
import HomePage from '../Views/HomePage/homePage'
import AboutPage from '../Views/AboutPage/aboutPage'
import Portfolios from '../Views/Portfolios/portfoliosPage'
import Contact from '../Views/Contact/contactPage'
import './app.css'

const App = () => {
  const [navToggle, setNavToggle] = useState(false)

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" role="button" onClick={navClick} aria-hidden="true">
        <div className="lines-1" />
        <div className="lines-2" />
        <div className="lines-3" />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/About">
              <AboutPage />
            </Route>
            <Route exact path="/Portfolios">
              <Portfolios />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
