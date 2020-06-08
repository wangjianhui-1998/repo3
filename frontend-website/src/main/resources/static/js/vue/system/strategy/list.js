var vue = new Vue({
    el:"#app",
    data:{
        destId:'',
        page:{},
        themes:{},
        toasts:[]

    },
    methods:{
        themeSelect:function(themeId, event){
            $("._j_tag").removeClass("on")
            $(event.currentTarget).addClass("on");
            vue.doPage(1);
        },
        doPage:function(number){

            var themeId = $("._j_tag.on").data("tid");
            ajaxGet("/strategy/query",{destId:vue.destId, themeId:themeId, currentPage:number}, function (data) {
                vue.page = data.data;
                vue.page.number = number;   //指定当前页

                buildPage(vue.page.number, vue.page.totalPages,vue.doPage);
            })
        }
    },
    mounted:function () {
        var param = getParams();
        this.destId = param.destId;
        //吐司
        ajaxGet("/strategy/list",{destId:param.destId}, function (data) {
            var map = data.data;

            vue.page = map.page; //攻略列表分页
            vue.themes = map.themes; //攻略主题
            vue.toasts = map.toasts; //攻略吐司
            //分页
            buildPage(vue.page.number, vue.page.totalPages,vue.doPage);
        })
    }
});

