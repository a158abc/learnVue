<template>
    <footer>
      <div  v-on:click="changeTitle">
        <p>{{copyright}}-{{title}}</p>
      </div>

    </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props:{
      title:{
        type:String
      }
    },
    data () {
      return {
        copyright:"CopyRight 2017 Vue Demo"
      }
    },
    methods:{
      changeTitle:function () {
       // this.title="change"; //vue2.0 不可更改父组件传递的属性值，如需要改变，需通过传递给父组件更改
        this.$emit("changeTitleEvent","子向父组件传递值")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    background-color: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
