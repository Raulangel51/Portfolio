/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/navBar'
import HomePage from '../Views/HomePage/homePage'
import './app.css'
import AboutPage from '../Views/AboutPage/aboutPage'

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
            <Route exat path="/About">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
