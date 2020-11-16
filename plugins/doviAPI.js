const axios = require('axios')
let url_dev = "http://localhost:5000"
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

async function getCasesByState(state, filter, filterValue, showBy) {
    state = state.toUpperCase()

    if(showBy === 'DayName' && filter === '' && state === '' && town === '' && filterValue === '') showBy = 'dayname'

    filter = filter.length != 0 ? `/by${filter}` : ''
    showBy = showBy.length != 0 ? `_by${showBy}` : ''
    state = state.length != 0 ? `/${state}` : ''
    filterValue = filterValue.length != 0 ? `/${filterValue}` : ''

    const endpoint = `${filter}${showBy}${state}${filterValue}` 
    const url = `${url_dev}${endpoint}`
    const result = await axios.get(url)
    return result
}

async function getCasesByTown(state, town, filter, filterValue, showBy) {
    state = state.toUpperCase()
    town = town.toUpperCase()

    if(showBy === 'DayName' && filter === '' && state === '' && town === '' && filterValue === '') showBy = 'dayname'

    filter = filter.length != 0 ? `/by${filter}` : ''
    showBy= showBy.length != 0 ? `_by${showBy}` : ''
    state = state.length != 0 ? `/${state}` : ''
    town = town.length != 0 ? `/${town}` : ''
    filterValue = filterValue.length != 0 ? `/${filterValue}` : ''

    const endpoint = `${filter}${showBy}${state}${town}${filterValue}` 
    // const endpoint = `${url_dev}/`
    const url = `${url_dev}${endpoint}`
    const result = await axios.get(url)
    return result
}

async function getCasesByNeighborhood(state, town, neighborhood, filter, filterValue, showBy) {

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

    if(neighborhood.length > 0)
        return await getCasesByNeighborhood(state, town, neighborhood, filterName, filterValue, showBy)
    if(town.length > 0)
        return await getCasesByTown(state, town, filterName, filterValue, showBy)
    if(state.length > 0)
        return await getCasesByState(state, filterName, filterValue, showBy)
    else
        return await getCasesByCountry(showBy)
}

module.exports = {
    allCases: getAllCases,
    apiHandler: apiHandler,
    casesByCountry: getCasesByCountry,
    casesByState: getCasesByState,
    casesByTown: getCasesByTown,
    getCasesByNeighborhood: getCasesByNeighborhood,
}