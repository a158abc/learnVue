<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>

<script>
import Users from './components/Users'

export default {
  name: 'App',
  data:function () {
    return {
      title:"这是我的第一个vue脚手架"
    }
  },
  components: {
    "users":Users
  }
}
</script>

<style scoped>
  h1{
    color: purple;
  }
</style>
