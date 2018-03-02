<template>
	<div class="demo1">
		<h1>{{$t("text")}}</h1>
		<h1>{{$t('hello')}}</h1>
		<div><button class="btn btn-info" @click='aaaa'>切换语言</button></div>
		<div>{{msg}}</div>
	</div>
</template>

<script>

export default {
	name: 'demo1',
	data(){
		return {
			msg: 123222
		}
	},
	created(){
		// alert(1)
	},
	methods:{
		aaaa(){
			if (this.$i18n.locale==='EN') {
				this.$i18n.locale='CN'
			}else{
				this.$i18n.locale='EN'
			}
			
		}
	}
}
</script>