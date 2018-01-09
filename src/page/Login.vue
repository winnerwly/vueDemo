<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4">
				<h1 class="page-header text-center">后台登陆</h1>
				<div class="form-group">
				    <label for="user">用户名：</label>
					<input v-model='username' type="text" class="form-control" id="user" placeholder="请输入用户名！！">
				</div>
				<div class="form-group">
				    <label for="pwd">密码：</label>
					<input v-model='pwd' type="password" class="form-control" id="pwd" placeholder="请输入密码">
				</div>
				<button type="button" class="btn btn-success btn-block" @click='login'>登陆</button>
				<p class="page-header">{{msg.city}} {{msg.weather}} {{msg.week}} {{msg.winddirect}} {{msg.windpower}} {{msg.windspeed}} </p>
			</div>
		</div>
	</div>
</template>
<script>
import { login } from '@/services/login'
import { demms } from '@/services/demm'
export default {
	name: 'login',
	data(){
		return {
			msg: '111',
			username:'',
			pwd:''
		}
	},
	async created () {
		const data = await demms({
			// platform: 'yqq',
			// hostUin: 0,
			// sin: 0,
			// ein: 29,
			// sortId: 5,
			// needNewCode: 0,
			// categoryId: 10000000,
			// rnd: Math.random(),
			// format: 'json',
			city:'安徽',
			cityid: 111,
			citycode: 101260301,
			appkey: '4ec4a121d6341bdf62b6f2db4f8858be'
		})
		console.log('data', data)
		this.msg = data.result.result
	},
	methods:{
		async login(){
			const data = await login({
				username: this.username,
				pwd: this.pwd,
				send:'ok'
			})
			if (data.code == 200) {
				console.log('data',data)
				// localStorage.setItem("userId", data.data[0].id)
				// localStorage.setItem("userName", data.data[0].username)
				this.$router.push({path:'/index'})
			}else{
				alert(data.msg)
			}
		}
	}
}
</script>
<style scoped>
button{
	margin-top: 30px;
}
</style>