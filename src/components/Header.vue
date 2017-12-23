<template>
	<div class="header">
		<router-link to='/Demo'>Demo</router-link>
	    <router-link to='/'>首页</router-link>
		<h1>{{msg}}</h1>
		<button @click='handleClick'>按钮</button>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data(){
			return {
				msg:'这是一个头部'
			}
		},
		props:{
			type:{
				type:String,
				default: ''
			}
		},
		methods:{
			handleClick(){
				// alert(this.type)
				this.$emit('aaaaaa',this.msg)
			}
		},
		created(){
			console.log('aaa',this.type)
		}
	}
</script>