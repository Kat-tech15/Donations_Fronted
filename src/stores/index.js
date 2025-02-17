import { createStore } from 'vuex';
import axios  from 'axios';

const store = createStore({
    state: {
        user: null,
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        setUser(state, user) {
           state.user = user;
        },
        setToken(state, token) {
            state.token = token;
            localStorage.removeItem('token');
        }
    },
    actions: {
        async login ({ commit }, credentials) {
            const response = await axios.post('/auth/login', credentials);
            commit('setToken', response.data.token);
        },
        async fetchUser({ commit }) {
            const response = await axios.get('/auth/profile');
            commit('setUser', response.data);
        }
    }
});
export default store;
