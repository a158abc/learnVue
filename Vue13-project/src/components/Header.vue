<template>
  <header>
    <h1>{{title1}}-{{title}}</h1>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    props:{
      title:{
        type:String
      }
    },
    data () {
      return {
        title1:"Vue.js Demo"
      }
    }
//    beforeCreate:function () {
//      alert("组件实例化之前执行的函数");
//    },
//    created:function () {
//      alert("组件实例化完毕，但页面还未显示");
//    },
//    beforeMount:function () {
//      alert("组件挂载前，页面仍未展示，但是虚拟DOM已经配置");
//    },
//    mounted:function () {
//      alert("组件挂载后，此方法执行，页面显示");
//    },
//    beforeUpdate:function () {
//      alert("组件更新前，页面仍未更新，但是虚拟DOM已经配置");
//    },
//    updated:function () {
//      alert("组件更新，此方法执行，组件显示");
//    },
//    beforeDestory:function () {
//      alert("组件销毁前");
//    },
//    destoryed:function () {
//      alert("组件销毁");
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    background-color: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>
