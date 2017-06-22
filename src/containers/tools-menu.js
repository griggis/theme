import { call, put } from 'redux-saga/effects'

const AWE_LOAD_ICONS = 'AWE_LOAD_ICONS'
export const AWE_ICON_LOAD_SUCCESS = 'AWE_ICON_LOAD_SUCCESS'
const AWE_ICON_LOAD_FAILURE = 'AWE_ICON_LOAD_FAILURE'

export function* loadIcons(api) {
    let { icons, error } = yield call(api.load, '/icons')
    if (icons) {
        yield put({type: AWE_ICON_LOAD_SUCCESS, icons})
    } else {
        yield put({type: AWE_ICON_LOAD_FAILURE, error})
    }
}