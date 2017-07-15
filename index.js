'use strict'

const wikidata = require('wikidata-sdk')
const {fetch} = require('fetch-ponyfill')({Promise: require('pinkie-promise')})
const toArray = require('lodash.toarray')

const request = (u) => fetch(u, {method: 'get'}).then((res) => res.json())

const extractImage = (res) => {
    if(!res) return null
    const e = toArray(res)[0]
    if(!e || !e.claims || !e.claims.P18 || !e.claims.P18[0] || !e.claims.P18[0].length >= 4) return null
    return e.claims.P18[0]
}

const image = (id) =>
    request(wikidata.getReverseClaims('P757', id+'')) // P757: World heritage site ID
    .then(wikidata.simplifySparqlResults)
    .then((res) => {
        if(res.length === 0) throw new Error('site not found')
        return res
    })
    .then(wikidata.getEntities)
    .then(request)
    .then(wikidata.parse.wd.entities)
    .then(extractImage)
    .catch((err) => null)

module.exports = image
