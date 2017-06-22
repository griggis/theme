import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import RootContainer from './containers/'

const rootEl = document.getElementById('builder-root')
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )

render(RootContainer)
if (module.hot) module.hot.accept('./containers', () => render(RootContainer))
