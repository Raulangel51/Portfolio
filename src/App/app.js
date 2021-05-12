/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/navBar'
import HomePage from '../Views/HomePage/homePage'
import AboutPage from '../Views/AboutPage/aboutPage'
import Portfolios from '../Views/Portfolios/portfoliosPage'
import './app.css'
import Contact from '../Views/Contact/contactPage'

const App = () => {
  const h = 'hola'

  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
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
