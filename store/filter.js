export const state = () => ({
    filter: {
        place: {
            state: "",
            town: "",
            neighborhood: "",
        },
        filter: {
            sex: "",
            ageRange: "",
            civil: "",
            scholarship: "",
            employee: "",
            weapon: "",
        },
        showBy: "", 
        results: {}
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
        state.filter.filter.ageRange = value
    },
    "estado civil": function(state, value) {
        state.filter.filter.civil = value
    },
    "clase empleado": function(state, value) {
        state.filter.filter.employee = value
    },
    escolaridad(state, value) {
        state.filter.filter.scholarship = value
    },
    arma(state, value) {
        state.filter.filter.weapon = value
    },
    showBy(state, value) {
        state.filter.showBy = value
    },
    results(state, value) {
        state.filter.results = value
    },
    cleanFilter(state, val) {
        Object.keys(state.filter.filter).map(key => state.filter.filter[key] = "")
    }
}