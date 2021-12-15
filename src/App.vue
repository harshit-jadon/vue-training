<style lang="less">
  @import "./App.less";
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <button @click="changeRoute('mcq')">MCQ</button> -->
      <router-link to="/mcq">MCQ</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    errorResponse : {}
  }
  },

  methods : {
    changeRoute(route){
      this.$router.push(`/${route}`)
    }
  }

}
</script>




