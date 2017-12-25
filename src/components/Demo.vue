<template>
	<div class="container">
		<router-link to='/Demo' class="btn btn-info">Demo</router-link>
	    <router-link to='/HelloWorld' class="btn btn-info">首页</router-link>
		<h1 class="page-header">{{msg}}</h1>
		<button type="button" class="btn btn-success" @click='handleClick'>{{msg}}</button>
		<table class="table table-hover">
			<thead>
				<tr>
					<td>id</td>
					<td>姓名</td>
					<td>年纪</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,key) in list">
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.age}}</td>
					<td><button ref="aaa" data-index="iiii++" class="btn btn-info" @click="handleaaClick(key,$event)">删除</button></td>
				</tr>
			</tbody>
		</table>
		<h1>{{ $t("demo.language") }}</h1>
		<h1>{{ $t("demo.hello") }}</h1>
	</div>
</template>
<script>
import { query } from '@/services/demo'
import $ from 'jquery'


export default {
	name: 'Demo',
	data(){
		return {
			msg: '你好世界',
			iiii:1,
			list: [
			{name:'user1',age:12,id:1},
			{name:'user2',age:12,id:2},
			{name:'user3',age:12,id:3},
			{name:'user4',age:12,id:4},
			{name:'user5',age:12,id:5}
			]
		}
	},
	created(){
		// console.log('this', this)
	},
	mounted(){
		$('button').hover(
		  function () {
		    $(this).addClass("hover")
		    this.msg='!!!!!!!!!!!!'
		  },
		  function () {
		    $(this).removeClass("hover")
		    this.msg='????????????'
		  }
		)
	},
	methods:{
		handleaaClick(index,e){
			console.log('index', index)
			console.log('sss', this.list)
			// console.log('eee', e)
			// console.log('this',this)
			// console.log('this',this.$refs.aaa[index])
			$(this.$refs.aaa[index]).parent().parent().hide()
		},
		async handleClick(){
			const data = await query()
			console.log('data',data)
		}
	}
}
</script>