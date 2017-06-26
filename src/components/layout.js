import React from 'react'
import PropTypes from 'react'
import Draggable from 'react-draggable'

export default function LayoutOptions (props) {
  return (
    <div className='options__container'>
      <Draggable>    
        <figure key='lyt_section'>
          <figcaption>Section</figcaption>
        </figure>
      </Draggable>
      <figure key='lyt_container'>
        <figcaption>Container</figcaption>
      </figure>
      <figure key='lyt_columns'>
        <figcaption>Columns</figcaption>
      </figure>
    </div>
  )
}