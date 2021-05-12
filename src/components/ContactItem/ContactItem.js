/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ContactItem = ({
  title, icon, text1, text2,
}) => {
  const a = 8

  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <h6>{title}</h6>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactItem
