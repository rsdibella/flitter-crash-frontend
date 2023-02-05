const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setUser(state, user) {
        state.user = user
    },
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading
    }
}

export default mutations