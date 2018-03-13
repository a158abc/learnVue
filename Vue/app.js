new Vue({
    el: "#vue-app",
    data: {
        name: "Mr Gao",
        job: "web开发",
        website:"http://www.thenewstep.com",
        websiteTag:"<a href='http://www.thenewstep.com'>TheNewStep</a>"
    },
    methods: {
        greet:function (time) {
            return 'Good '+time+" "+this.name+"!";
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