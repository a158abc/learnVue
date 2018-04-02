<template>
  <div id="home">
    <app-header v-bind:title="title" ></app-header>
    <users v-bind:userdata="users" message="我是父类的信息值"></users>
    <!--<users v-bind:userdata="users"></users>-->
    <app-footer v-bind:title="title" v-on:changeTitleEvent ="updateTitle($event)"></app-footer>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld';
  import Header from './Header';
  import Footer from './Footer';
  import Users from './Users';
  //import AppFooter from "./components/Footer.vue";

  export default {
    name: 'home',
    components: {
      "app-header":Header,
      "app-footer":Footer,
      "users":Users
    },
    data() {
      return {
        users:[
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Tom",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false},
//          {name:"Herry",position:"Web开发",show:false}
           ],
        title:"传递一个值（string number boolean）"
      }
    },
    methods:{
      updateTitle(title){
        this.title =title;
      }
    },
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
        // console.log(data);
         this.users = data.body;
      });
    }
  }
</script>

<style>

</style>
