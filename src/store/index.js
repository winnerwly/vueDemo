import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 1,
	index: '我想着仅仅是vuex传来的一段文字',
	locale: 'CN'
}

const mutations = {
	add(state,n=1){
		// console.log('state',state)
		state.count+=n
	},
	reduce(state,n=1){
		state.count-=n
	},
	mutationName(state) {
		state.count = state.count*10
	},
	language(state) {
		console.log(state.locale)
		if (state.locale === 'CN') {
			state.locale = 'EN'
		}else{
			state.locale = 'CN'
		}
	}
}

const actions = {
	increment (context) {
      context.commit('mutationName')
	}
}

const getters = {
  countaa: state => state.count+'ddd'
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})