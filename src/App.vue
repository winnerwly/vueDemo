<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    if (!localStorage.userId) {
      // this.$router.push({path:'/'})
    }
  }
}
</script>

<style>
#app {
}
</style>
