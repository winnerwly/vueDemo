<template>
	<div class="index">
		<div class="container">
			<div class="">
				<h3 class="header page-header text-left">
					欢迎<span class="text-info">{{username}}</span>登陆,
				</h3>
				<div>
					<h1 class="text-center text-info">ABC会员管理系统</h1>
					<table class="table table-border table-hover">
						<thead>
							<tr>
								<th><b>用户名</b></th>
								<th><b>邮箱</b></th>
								<th><b>注册时间</b></th>
								<th><b>操作</b></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in data">
								<td>{{item.username}}</td>
								<td>{{item.email}}</td>
								<td>{{item.regTime}}</td>
								<td><button @click='aaa(item.id)' class="btn btn-info">修改</button> <button @click='bbb(item.id)' class="btn btn-success">删除</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { query } from '@/services/index'
export default {
	name: 'index',
	data(){
		return {
			msg:'12323',
			username: '',
			data: []
		}
	},
	async created(){
		this.username= window.localStorage.userName
		const data = await query()
		console.log('data',data)
		if(data.code === 200){
			this.data = data.data
		}
		console.log('this.data',this.data)
	},
	methods:{
		aaa(id){
			alert('我修改了'+id)
		},

		bbb(id){
			alert('我删除了'+id)
		}
	}
}
</script>
<style scoped>
.index{
	font-size: 16px;
	line-height: 1.5em;
	font-family: '微软雅黑'
}
.well{
	margin-top: 20px;
}
.header{
	margin-top: 0px;
}
</style>