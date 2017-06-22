import nock from 'nock'
import expect from 'expect'
import { call, put } from 'redux-saga/effects'

import { AWE_ICON_LOAD_SUCCESS } from '../src/containers/tools-menu/state'
import { loadIcons } from '../src/containers/tools-menu/sagas'

import AweApiClient from '../src/api'
import config from '../src/config'

const api = new AweApiClient(config.api)

describe('(Container) ToolsMenu', function () {
  let response = {
    icons: [1, 2, 3]
  }
  beforeEach(function () {
    nock.cleanAll()
  })
  it('fetches icons', function () {
    nock(config.api.restBase)
      .get(`${config.api.wpPath}/icons`)
      .reply(200, response)
    let iterator = loadIcons(api)
    return expect(iterator.next().value).toEqual(call(api.load, '/icons'))
  })
  it('dispatches the AWE_ICON_LOAD_SUCCESS', function () {
    nock(config.api.restBase)
      .get(`${config.api.wpPath}/icons`)
      .reply(200, response)
    let iterator = loadIcons(api)
    iterator.next()
    return expect(iterator.next(response).value).toEqual(put({type: AWE_ICON_LOAD_SUCCESS, icons: response.icons}))
  })
})
