/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const MenuItems = ({ menuItems }) => {
  const a = 9

  return (
    <div className="portfolios">
      {
        menuItems.map((item) => (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1} target="_blank" rel="noreferrer">{item.icon1}</a>
                  <a href={item.link2} target="_blank" rel="noreferrer">{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder</p>
          </div>
        ))
      }
    </div>
  )
}

export default MenuItems
