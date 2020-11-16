const axios = require('axios')
// let url_dev = "http://localhost:5000"
let url_dev = "https://dovi-api.herokuapp.com"
// const heroku_url = "https://dovi-api.herokuapp.com"
// const aws_url = "http://54.224.32.155:5000"

async function getAllCases() {
    const endpoint = '/bySex'
    const url = `${url_dev}${endpoint}`
    const result = await axios.get(url)
    return result
}

async function getCasesByCountry(showBy) {
    const endpoint = `/by${showBy}`
    const url = `${url_dev}${endpoint}`
    const result = await axios.get(url)
    return result
}

async function getCasesBy(state, town, neighborhood, filter, filterValue, showBy) {

    if(showBy === 'DayName' && filter === '' && state === '' && town === '' && filterValue === '') showBy = 'dayname'

    filter = filter.length != 0 ? `/by${filter}` : ''
    showBy= showBy.length != 0 ? `_by${showBy}` : ''
    state = state.length != 0 ? `/${state}` : ''
    town = town.length != 0 ? `/${town}` : ''
    neighborhood = neighborhood.length != 0 ? `/${neighborhood}` : ''
    filterValue = filterValue.length != 0 ? `/${filterValue}` : ''

    const endpoint = `${filter}${showBy}${state}${town}${neighborhood}${filterValue}` 
    const url = `${url_dev}${endpoint}`
    const result = await axios.get(url)
    return result
}

function capitalize(data) {
    if(typeof data != 'string') return ''
    splitedData = data.split(' ')
    splitedCapitalizedData = splitedData.map(i => i.charAt(0).toUpperCase() + i.slice(1))
    joinedData = splitedCapitalizedData.join(' ')
    return joinedData
}

async function apiHandler({place, filter, showBy="Sex"}) {
    // To uppercase
    place = Object.keys(place).map(i => place[i].toUpperCase())
    const state = place[0] || ''
    const town = place[1] || ''
    const neighborhood = place[2] || ''
    const chosenKey = Object.keys(filter).filter(key => filter[key].length > 0)
    const filterName = capitalize(chosenKey[0]) || ''
    const filterValue = filter[chosenKey[0]] || ''

    if(neighborhood === '' && town === '' && state === '')
        return await getCasesByCountry(showBy)
    else
        return await getCasesBy(state, town, neighborhood, filterName, filterValue, showBy)
}

module.exports = {
    allCases: getAllCases,
    apiHandler: apiHandler,
    casesByCountry: getCasesByCountry,
    getCasesBy: getCasesBy,
}