<template>
    <div class="users">
      <h1>用户列表</h1>
      <ul>
        <li v-for="user in users">user</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name:"users",
        data() {
            return {
              users: ["tom","jerry","mike"]
            }
        },
       components: { }
    }
</script>
<!--scoped 作用域当前-->
<style scoped>
h1{
  color: green;
}
</style>
