/**
 * Created by dipu on 2016/3/31.
 */
var Vue = require('vue');
var App = require('./app.vue');
new Vue({
    el:'body',
    components:{
        app: App
    }
});