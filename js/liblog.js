/**
 * Created by liw on 2017/6/23.
 */
var v_home = new Vue({
    el: '#home',
    data:{
        articles:[],
        tags:[],
        apiUrl:'data/data.json',
        childUrl:"single.html"
    },
    mounted:function () {
        this.getArticles();
    },
    methods:{
        getArticles:function () {
            this.$http.get(this.apiUrl).then((response)=>{
                this.articles = response.body.articles;
                this.tags = response.body.tags;
            })
            .catch (function(response){
                console.log(response)
            })
        }
    }
});
