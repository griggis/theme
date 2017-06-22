import fetch from 'isomorphic-fetch'
import config from '../config'


export default class AweApiClient {
    constructor ({ restBase, wpPath }) {
        this.restBase = restBase
        this.wpPath = wpPath
    }

    checkStatus (response) {
        if (response.ok) {
            return response
        }
        let error = new Error(response.statusText)
        error.response = response
        throw error
    }

    load (path) {
        return fetch(this.restBase+this.wpPath+path)
            .then(this.checkStatus)
            .then(response => response.json())
            .catch(error => error)
    } 
}