<template>
	<div class="index">
		<Headers type='123456' @aaaaaa='aaClick'></Headers>
		<div>
			<h1>这是一个首页</h1>
			<h1>{{count}}</h1>
			<p>{{index}} {{count}}</p>
			<button @click='add(20)'>火星一号</button>
			<button @click='handleClickA()'>按钮一号</button>
			<button @click='increment()'>按钮二号</button>
		</div>
	</div>
</template>

<script>
import Demo from '../components/Demo'
import Headers from '../components/Header'
import Footers from '../components/Footer'
import store from '@/store'
import { mapState,mapMutations,mapActions } from 'vuex';

export default {
	name: 'Index',
	components:{ Demo, Headers, Footers, },
	data(){
		return {
			msg:'嘻嘻',
			list: []
		}
	},
	store,
	created(){
	},
	computed:mapState({
		count: state => state.count,
		index: state => state.index,
	}),
	methods: {
		...mapMutations([
	    	'add',
	    	'reduce',
	  	]),
	  	...mapActions([
	  		'increment'
	  	]),
		handleClickA(){
			this.$store.commit('add',10)
		},
		handleClickB(){
			this.$store.commit('reduce',2)
		},
		aaClick(e){
			alert(e)
			console.log('e',e)
		}
	}
}
</script>