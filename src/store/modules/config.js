//import * as types from '../mutation-types'
import Vue from 'vue'

// initial state
const state = {
    historySectionColor: 'blue',
    historyItemsToShow: 10,
    historySections: [
        {'id': '7267fdbd-51cd-4075-bce2-303642eec5c2','name': 'Github Issues', regex: 'github.com/.+/.+/issues/'},
        {'id': 'e7ee3421-2456-4e5a-bb08-b8718e4dccf7','name': 'Github Repositories', regex: 'github.com/[a-zA-Z0-9-]+/[a-zA-Z0-9-]+$'},
        {'id': 'e7899b8d-3f2c-4a8f-a68d-1aa280e1a763','name': 'Stack Overflow', regex: 'stackoverflow.com/questions/'},
        {'id': '5a4bd3f2-1c15-405f-a989-76565e178f3b','name': 'MDN', regex: 'https://developer.mozilla.org/en-US/docs/'},
        {'id': '95d0fe7d-a587-494c-9aa1-eeb3142c0cb4','name': 'Reddit', regex: 'reddit.com/r/.+/comments/.+'},
        {'id': '4aba4c5d-02a7-4b0c-a36b-2bad5807af0a','name': 'Wiki', regex: 'wiki'},
    ],
    colors: ['red','pink','purple','deep-purple','indigo','blue','light-blue','cyan','teal','green','light-green','lime','yellow','amber','orange','deep-orange','brown','blue-grey','grey']
}

// getters
const getters = {
    historyItemsToShow: state => state.historyItemsToShow,
    historySections: state => state.historyItems
}

// actions
const actions = {

}

// mutations
const mutations = {
    updateHistoryItemsToShow(state,historyItemsToShow) {
        state.historyItemsToShow = historyItemsToShow
    },
    updateHistorySectionColor(state,newColor) {
        state.historySectionColor = newColor
    },
    updateHistoryItemsToShow(state,newValue) {
        state.historyItemsToShow = newValue
    },
    updatehistorySections(state,historySections) {
        state.historySections = historySections
    },
    saveHistorySection(state,newHistorySection) {
        var index = state.historySections.findIndex(elem => elem.id == newHistorySection.id)
        if(index > -1) {
            Vue.set(state.historySections, index, newHistorySection)
        }
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}