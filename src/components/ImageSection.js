/* eslint-disable no-unused-vars */
import React from 'react'
import aboutImg from '../../assets/Images/aboutImage.jpeg'

const ImageSection = () => {
  const a = 9

  return (
    <div className="ImageSection">
      <div className="img">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am a
          {' '}
          <span>Computer Specialist.</span>
        </h4>
        <p className="about-text">
          I like to make ideas come true. I love to create amazing web sites, applications
          and all kind of proyects.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Raul Angel Jimenez Hernandez</p>
            <p>: 20</p>
            <p>: Guatemalan</p>
            <p>: Spanish, English</p>
            <p>: Guatemala City, 13 street</p>
            <p>: Guatemala</p>
          </div>
        </div>
        <button className="btn" type="button">Download CV</button>
      </div>
    </div>
  )
}

export default ImageSection
