new Vue({
    el: "#vue-app",
    data: {
        age: 30,
        x:0,
        y:0
    },
    methods: {
        add:function (inc) {
            this.age += inc;
        },
        subtract:function (dec) {
            this.age -= dec;
        },
        updateXY:function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopmove:function (event) {
            event.stopPropagation();//停止点击事件冒泡
        },
        alertfunc:function () {
            alert("hello world")
        },
        doThis:function () {
            alert("parent");
        },
        doChild:function () {
            alert("child");
        },
        onScroll:function () {
            console.log("onScroll");
        }
        
    }
});

/**
 *
 * el:element 需要获取的元素，一定是html中的容器
 * data:用于数据存储
 * methods: 用于存储各种方法
 * data-binding: 给属性绑定值
 * */