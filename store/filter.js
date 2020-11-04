export const state = () => ({
    filter: {
        filterState: "",
        town: "",
        neighborhood: "",
        sex: "",
        age: "",
        civilStatus: "",
        levelOfScholarity: ""
    }
})

export const mutations = {
    filterState(state, value) {
        state.filter.filterState = value
    },
    town(state, value) {
        state.filter.town = value
    },
    neighborhood(state, value) {
        state.filter.neighborhood = value
    },
    sex(state, value) {
        state.filter.sex = value
    },
    age(state, value) {
        state.filter.age = value
    },
    civilStatus(state, value) {
        state.filter.civilStatus = value
    },
    levelOfScholarity(state, value) {
        state.filter.levelOfScholarity = value
    },
}