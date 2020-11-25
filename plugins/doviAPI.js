const axios = require('axios')
// let url_dev = "https://dovi-api.herokuapp.com"
// const heroku_url = "https://dovi-api.herokuapp.com"
const url_dev = "http://54.224.32.155:5000"

async function predictField(data) {
    const endpoint = '/predic'
    const endpointData = `/${data.age}/${data.sex}/${data.civilStatus}/${data.employeeType}/${data.scholarship}`
    const url = `${url_dev}${endpoint}${endpointData}`
    const result = await axios.get(url)
    return {
        field: result.data[0],
        accuracy: (result.data[1]*100).toFixed(2)
    }
}

async function predictDomesticViolence(data) {
    const endpoint = '/numeroCasos'
    const endpointData = `/${data.state}/${data.town}/${data.neighborhood}/${data.day}/${data.age}/${data.sex}/${data.place}`
    const url = `${url_dev}${endpoint}${endpointData}`
    const result = await axios.get(url)
    return result
}

async function formatPlacesResponse(data){
    const places = data[0]
    const values = data[1]
    let response = []
    places.forEach((val, index) => {
        response.push({
            //Hago esto porque los municipios con un (CT) al final no son reconocidos en el backend, vaya uno a saber porque.
            name: val.split("(")[0],
            cases: values[index].toString(),
        })
    })

    return response
}

async function getTownsOfState(state) {
    state = state.toUpperCase()
    const endpoint = `/byTown/${state}`
    const url = `${url_dev}${endpoint}`
    let result = await axios.get(url)
    result = formatPlacesResponse(result.data)
    return result
}

async function getNeighborhoodsOfTown(state, town) {
    state = state.toUpperCase()
    town = town.toUpperCase()
    const endpoint = `/byNeighborhood/${state}/${town}`
    const url = `${url_dev}${endpoint}`
    let result = await axios.get(url)
    result = formatPlacesResponse(result.data)
    return result
}

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

    filter = filter.length != 0 ? `/by${filter}_` : '/'
    showBy= showBy.length != 0 ? `by${showBy}` : ''
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

    if(neighborhood === '' && town === '' && state === '') {
        return await getCasesByCountry(showBy)
    }
    else{
        return await getCasesBy(state, town, neighborhood, filterName, filterValue, showBy)
    }
}

module.exports = {
    allCases: getAllCases,
    apiHandler: apiHandler,
    casesByCountry: getCasesByCountry,
    getCasesBy: getCasesBy,
    towns: getTownsOfState,
    neighborhoods: getNeighborhoodsOfTown,
    predictField: predictField,
    predictDomesticViolence: predictDomesticViolence,
}