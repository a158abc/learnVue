<template>
  <div class="users">
    <ul>
      <li v-for="user in userdata" >
        <h2>{{user.name}}</h2>
        <h3>{{user.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除用户</button>
    <p>{{message}}</p>
  </div>
</template>
<!---
  传值：number string boolean
  传引用：object array
--->
<script>
  export default {
    name: 'users',
    //props:["userdata"], //此处的userdata来源于父组件v-bind后面定义
    props:{
      userdata:{
        type:Array,
        required:true
      },
      message:{
        type:String,
        default:"子类的信息"
      }
    },
    data () {
      return {

      }
    },
    methods:{
      deleteUser:function () {
        this.userdata.pop();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    border: 1px solid #222;
    margin: 10px;
  }

</style>
