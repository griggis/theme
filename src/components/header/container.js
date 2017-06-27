import { connect } from 'react-redux'
import Header from './component'

export const SLIDER_BACK = 'SLIDER_BACK'
export const SLIDER_FORWARD = 'SLIDER_FORWARD'

export const sliderBack = () => ({type: SLIDER_BACK})
export const sliderForward = () => ({type: SLIDER_FORWARD})

export const header = (state = {}, action) => {
  switch (action.type) {
    case SLIDER_BACK:
      return {...state, activeItem: state.activeItem - 1 }
    case SLIDER_FORWARD:
      return {...state, activeItem: state.activeItem +1 }
  }
  return state
}

const mapStateToProps = state => ({
  activeItem: state.header.activeItem
})

const mapDispatchToProps = dispatch => ({
  sliderBack: () => dispatch(sliderBack()),
  sliderForward: () => dispatch(sliderForward())
})

export default connect(mapDispatchToProps, mapDispatchToProps)(Header)