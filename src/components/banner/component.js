import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.css'

const Banner = ({price, title, caption, itemPageLink}) => (
  <section className='banner'>
    <h2>
      <p className='banner__price'>from {price}</p>
      <p className='banner__title'>{title}</p>
    </h2>
    <p>{caption}</p>
    <Link to={itemPageLink}>See more</Link>
  </section>
)

Banner.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  itemPageLink: PropTypes.string.isRequired
}