/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Categories from '../../components/Categories/Categories'
import MenuItems from '../../components/MenuItems/MenuItems'
import Title from '../../components/title/title'
import portfolios from '../../components/AllPortfolios/allPortfolios'

const Portfolios = () => {
  const [categories, setCategories] = useState(null)
  const [menuItems, setMenuItems] = useState(portfolios)

  return (
    <div className="PortfoliosPage">
      <div className="PortfoliosTitle">
        <Title title="Portfolios" span="Portfolios" />
      </div>
      <div className="portfolios-data">
        <Categories />
        <MenuItems menuItems={menuItems} />
      </div>
    </div>
  )
}

export default Portfolios
