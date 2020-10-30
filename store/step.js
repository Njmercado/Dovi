export const state = () => ({
    step: "map"
})

export const mutations = {
    next(state, value) {
        state.step = value
    }
} 
