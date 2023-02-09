const getters = {
    getUsers(state) {
        return state.users
    },
    getSelfUser(state) {
        return state.selfUser
    },
    getIsLoading(state) {
        return state.isLoading
    },
    getSelectedUser(state) {
        return state.selectedUser
    },
    getToken(state) {
        return state.token
    }
}

export default getters