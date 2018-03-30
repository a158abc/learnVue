
// let data = {
//     name:"sony"
// };

Vue.component("greeting",{
    template: `<p>{{name}}:大家晚上好啊 <button v-on:click="changeName">改变名字</button></p>` ,
    data:function () {
        return  data; {
            name:"jerry"
        }
    },
    methods:{
        changeName:function () {
            this.name = "Tomy"
        }
    }
});

let one=new Vue({
    el:"#vue-app-one",
});

let two=new Vue({
    el:"#vue-app-two",
});


