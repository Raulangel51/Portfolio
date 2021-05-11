/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ServicesSection = ({ image, title }) => {
  const a = 9

  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="s-title">{title}</h5>
          {/* Se le puede agregar una descripcion asi:
          <p className="s-text">{description}</p> */}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
