const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setSelfUser(state, selfUser) {
        state.selfUser = selfUser
    },
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading
    },
    setSelectedUser(state, selectedUser) {
        state.selectedUser = selectedUser
    },
    setToken(state, token) {
        state.token = token
    }
}

export default mutations