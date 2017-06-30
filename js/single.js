/**
 * Created by 月月 on 2017/6/24.
 */
var v_single = new Vue({
    el: '#single',
    data:{
        artId:'',
        //title:'',
        article:'',
        info:{},
        //author:'',
        //date:'',
        //img:'',
        //tags:'',
        comments:[]
    },
    mounted:function(){
        this.initArt();
        this.getInfo();

    },
    methods:{
        initArt: function(){
            this.$http.get('data/article.json').then((response)=>{
                this.article = response.body.article;
                this.comments = response.body.comments;
            });
        },
        getInfo: function (){
            var _this = this;
            _this.artId = window.location.search.substr(4);
            _this.$http.get('data/data.json').then((response)=>{
                response.body.articles.forEach(function(item){
                    console.log(_this.artId);
                    if(item.id == _this.artId){
                        console.log(item);
                        _this.info = item;
                    }
                });
            });
        }
    }
})