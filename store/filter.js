export const state = () => ({
    filter: {
        place: {
            state: "",
            town: "",
            neighborhood: "",
        },
        filter: {
            sex: "",
            age: "",
            civilStatus: "",
            levelOfScholarity: "",
            employeeType: "",
            weapon: "",
        },
        showBy: "", 
        filterResults: {}
    }
})

export const mutations = {
    state(state, value) {
        state.filter.place.state = value
    },
    town(state, value) {
        state.filter.place.town = value
    },
    neighborhood(state, value) {
        state.filter.place.neighborhood = value
    },
    sexo(state, value) {
        state.filter.filter.sex = value
    },
    edad(state, value) {
        state.filter.filter.age = value
    },
    "estado civil": function(state, value) {
        state.filter.filter.civilStatus = value
    },
    "clase empleado": function(state, value) {
        state.filter.filter.employeeType = value
    },
    escolaridad(state, value) {
        state.filter.filter.levelOfScholarity = value
    },
    arma(state, value) {
        state.filter.filter.weapon = value
    },
    showBy(state, value) {
        state.filter.showBy = value
    },
    filterResults(state, value) {
        state.filter.filterResults = value
    }
}