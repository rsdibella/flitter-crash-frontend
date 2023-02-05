const getters = {
    getUsers(state) {
        return state.users
    },
    getUser(state) {
        return state.user
    },
    getIsLoading(state) {
        return state.isLoading
    }
}

export default getters