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
			</div>
		</div>
	</div>
</template>
<script>
import { login } from '@/services/login'
export default {
	name: 'login',
	data(){
		return {
			msg: '111',
			username:'',
			pwd:''
		}
	},
	methods:{
		async login(){
			console.log('username', this.username)
			console.log('pwd', this.pwd)
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