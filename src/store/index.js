import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    state: {
        users: [ { name: "User 1", phone: "123456"} ]
    },
    getters: {
        users: state => state.users 
    },
    mutations: {
        addUser(state, user) {
            state.users.push(user)
        }
    },
    actions: {
        addUser({commit}, user) {
            commit('addUser', user)
        }
    }
})