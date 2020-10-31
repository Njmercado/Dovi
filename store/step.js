export const state = () => ({
    step: "mapa"
})

export const mutations = {
    next(state, value) {
        state.step = value
    }
} 
