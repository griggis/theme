import { takeEvery } from 'redux-saga/effects'

import { loadIcons } from './tools-menu'

function* watchLoadIcons() {
    yield takeEvery('AWE_LOAD_ICONS', loadIcons)
}