import { call, put } from 'redux-saga/effects'
import { AWE_ICON_LOAD_FAILURE, AWE_ICON_LOAD_SUCCESS } from './state'

export function* loadIcons (api) {
  let { icons, error } = yield call(api.load, '/icons')
  if (icons) {
    yield put({type: AWE_ICON_LOAD_SUCCESS, icons})
  } else {
    yield put({type: AWE_ICON_LOAD_FAILURE, error})
  }
}
