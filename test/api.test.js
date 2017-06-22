import AweApiClient from '../src/api'
import config from '../src/config'

import expect from 'expect'
import nock from 'nock'

const api = new AweApiClient(config.api)

describe('AweApiClient', function () {
    let response = {
        data: [1,2,3]
    }
    beforeEach(function () {
        nock.cleanAll()
    })
    it('loads items', function () {
        nock(config.api.restBase)
            .get(`${config.api.wpPath}/data`)
            .reply(200, response)
            
        return api.load('/data').then(resp => expect(resp).toEqual(resp))
    })
    it('throws', function () {
        nock(config.api.restBase)
            .get(`${config.api.wpPath}/data`)
            .reply(500)
        return api.load('/data').then(error => expect(error).toIncludeKey('response'))
    })
})