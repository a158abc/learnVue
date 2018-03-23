new Vue({
    el:"#app",
    data:{
        changeColor:false,
        changeLength:false
    },
    methods:{

    },
    computed:{
        compClasses:function () { //计算属性
            return{
                changeColor:this.changeColor,
                changeLength:this.changeLength
            }
        }
    }
});