import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Slider = ({activeItem, items, handleBack, handleForward}) => (
  <div className='slider'>
    <button type='button' onClick={handleBack}>&lt;</button>
    {items.map(item => {
      let pos = activeItem === item.id ? 'visible': 'hidden'
      return (
        <figure key={`slide_item__${item.id}`} id={`slide_item__${item.id}`} className={pos}>
          <img srcSet={item.img.src} alt={item.img.alt} />
          <figcaption>{item.title}</figcaption>
        </figure>
      )
    })}
    <button type='button' onClick={handleForward}>&gt;</button>
  </div>  
)

Slider.propTypes = {
  activeItem: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  handleBack: PropTypes.func.isRequired,
  hanldeForward: PropTypes.func.isRequired
}

export default Slider