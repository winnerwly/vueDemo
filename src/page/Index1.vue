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
			<hr/>
			<button class='btn btn-info' @click='language()'>切换语言</button>
			<span class='page-header'>{{ $t('demo.language')}}</span>
			<span class='page-header'>{{ $t('demo.hello')}}</span>
			<span class='page-header'>{{locale}}</span>
			<div ref='aaa'>12321312</div>
			<button @click='aaaa'>按钮aaa</button>
			<hr/>
			<demoa @change='changeaa'></demoa>
			<demob></demob>
		</div>
	</div>
</template>

<script>
import Demo from '../components/Demo'
import Headers from '../components/Header'
import Footers from '../components/Footer'
import store from '@/store'
import { mapState,mapMutations,mapActions } from 'vuex';
import demoa from '../components/demo1'
import demob from '../components/demo2'

export default {
	name: 'Index',
	components:{ Demo, Headers, Footers, demoa, demob },
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
		locale: state => state.locale
	}),
	methods: {
		changeaa(v){
			alert(v)
		},
		aaaa(){
			console.log(this.$refs)
		},
		...mapMutations([
	    	'add',
	    	'reduce',
			'language'
	  	]),
	  	...mapActions([
	  		'increment'
	  	]),
		languageClick(){
			alert(1)
		},
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