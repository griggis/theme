import React from 'react'
import PropTypes from 'prop-types'
import WidgetPicker from '../../components/picker'
import LayoutOptions from '../../components/layout'


class WidgetContainer extends React.Component {
  static propTypes = {
    toggleOptions: PropTypes.func.isRequired,
    widgets: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      optionsToggled: PropTypes.bool.isRequired
    }))
  }
  constructor(props) {
    super(props)
  }
  render () {
    let { widgets, toggleOptions } = this.props
    return (
      <section className='widget_container'>
        {widgets.map(widget => (
          <WidgetPicker key={widget.title} optionsToggled={widget.toggled} toggleOptions={toggleOptions} title={widget.title}>
            <LayoutOptions />
          </WidgetPicker>
        ))}
      </section>
    )
  }
}

