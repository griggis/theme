import React from 'react'
import PropTypes from 'prop-types'

export default function WidgetPicker (props) {
  return (
    <div className='widget__picker'>
      <h4 onClick={() => props.toggleOptions(props.title)}>{props.title}</h4>
      <div style={{display: `${props.optionsToggled}`}}>{props.children}</div>
    </div>
  )
}

WidgetPicker.propTypes = {
  toggleOptions: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  optionsToggled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

