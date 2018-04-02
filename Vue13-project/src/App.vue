<template>
  <div id="app">
    <ul>
      <!--<li><a href="/">HOME</a></li>-->
      <!--<li><a href="/helloworld">HOELLWORLD</a></li>-->

      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/helloworld">HOELLWORLD</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return{

    }
  }
}
</script>

<style>

</style>
