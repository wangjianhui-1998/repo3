var vue = new Vue({
    el:"#app",
    data:{
        toasts:[],
        dest:{},
        catalogs:[],
        catalog:'',
        strategy:{}
    },
    methods:{

    },
    mounted:function () {
        var param = getParams();

        //吐司
        ajaxGet("/destination/getToast",{id:param.destId}, function (data) {
            var map = data.data;

            vue.toasts = map.toasts;
            vue.dest = map.dest;
        })

        //概况
        ajaxGet("/strategy/queryCatalogsByDestId",{destId:param.destId}, function (data) {
            vue.catalogs = data.data;

            $.each(vue.catalogs, function(index, item){

                if(item.id == param.catalogId){
                    vue.catalog = item; //选中攻略分类
                    console.log(item)
                    vue.strategy = item.strategies[0] //攻略分类下所有攻略文章第一篇,需要在页面显示文章内容
                }

            })
        })

    }
});

