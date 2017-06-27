import { connect } from 'react-redux'
import Header from './component'

export const SLIDER_BACK = 'SLIDER_BACK'
export const SLIDER_FORWARD = 'SLIDER_FORWARD'

export const sliderBack = () => ({type: SLIDER_BACK})
export const sliderForward = () => ({type: SLIDER_FORWARD})

const initState = {
  activeItem: 1,
  sliderThumbs: '/sprites/banner.png'
  items: [
    {
      id: 1,
      price: 100,
      title: 'Shirts',
      caption: 'We do awesome shirt paintings',
      itemPageLink: '/shirts',
      img: {
        alt: 'a thumb image of a shirt'
      }
    }
  ]
}


export const header = (state = initState, action) => {
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