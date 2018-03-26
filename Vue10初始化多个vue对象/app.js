let one=new Vue({
    el:"#vue-app-one",
    data:{
        title:"app one的内容",
    },
    methods:{

    },
    computed:{
        greeting:function () {
            return "hello App One";
        }
    }
});

let two=new Vue({
    el:"#vue-app-two",
    data:{
        title:"app two的内容",
    },
    methods:{
        changeTitle:function () {
            one.title = "已经改了名字了";
        }
    },
    computed:{
        greeting:function () {
            return "hello App Two";
        }
    }
});

two.title="app two 也已经改名字了";
