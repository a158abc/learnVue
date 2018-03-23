new Vue({
    el:"#app",
    data:{
        a:0,
        b:0,
        age:20
    },
    methods:{
        // addtoA:function () {
        //     console.log("add to a");
        //     return this.a+this.$data.age;
        // },
        //
        // addtoB:function () {
        //     console.log("add to b");
        //     return this.b+this.age;
        // }
    },
    computed:{// 当前页面变化幅度大或者耗时 使用计算属性，页面调用不要写addtoA();
        addtoA:function () {
            console.log("add to a");
            return this.a+this.$data.age;
        },

        addtoB:function () {
            console.log("add to b");
            return this.b+this.age;
        }
    }
});