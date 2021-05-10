/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Title = ({ title, span }) => {
  const a = 8

  return (
    <div className="Title">
      <h3>
        {title}
        <span>{span}</span>
      </h3>
    </div>
  )
}

export default Title
