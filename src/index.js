import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/slider'

const rootEl = document.getElementById('builder-root')
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )

render(Slider)
if (module.hot) module.hot.accept('./containers', () => render(Slider))
