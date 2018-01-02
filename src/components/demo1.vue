<template>
  <div class="firstChild">
    <input type="text" placeholder="请输入文字" v-model="message">
    <button @click="showMessage">向组件传值</button>
    <br>
  </div>
</template>
<script>
  import bus from './eventBus'
  export default{
    name: 'firstChild',
    data () {
      return {
        message: '你好'
      }
    },
    methods: {
      showMessage () {
    //    alert(this.message)
        bus.$emit('userDefinedEvent', this.message);//传值
      }
    }
  }
</script>