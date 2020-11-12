const axios = require('axios')
const url_dev = "http://localhost:8080"

async function getAllCases() {
    const endpoint = '/chart_cases_bySex'
    const url = `${url_dev}${endpoint}`
    const result = await axios.get(url)
    return result
}

async function getCasesByState(state) {
    state = state.toUpperCase()
    const endpoint = '/chart_cases_bySex'
    const url = `${url_dev}${endpoint}/${state}`
    const result = await axios.get(url)
    return result
}

async function getCasesByMonth(state) {
    state = state.toUpperCase()
    const endpoint = '/chart_cases_byMonth'
    const url = `${url_dev}${endpoint}`
    const result = await axios.get(url)
    return result
}

async function apiHandler(place, filter, showBy) {
}

module.exports = {
    casesByState: getCasesByState,
    allCases: getAllCases,
    apiHandler: apiHandler,
}