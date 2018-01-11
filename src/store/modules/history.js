//import * as types from '../mutation-types'
import staticHistory from '../historyTest.json'

// initial state
const state = {
    history: []
}

// getters
const getters = {
    history: state => state.history,
}

// actions
const actions = {
    getHistory(context) {
        if(chrome.history) {
            chrome.history.search({text: '',maxResults: 10000, startTime: 0}, function(res){
                context.commit('setHistory',res)
            })
        } else {
            context.commit('setHistory',staticHistory)
        }
    }
}

// mutations
const mutations = {
    setHistory(state,newHistory) {
        state.history = newHistory
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}