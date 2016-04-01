<template>
    <div id="header">
      <a id="yc" href="http://www.ycombinator.com">
        <img src="https://news.ycombinator.com/y18.gif">
      </a>
      <h1><a href="#/">Hacker News</a></h1>
      <span class="source">
        <template v-for="menu in menus">
            <a  v-link="{ path: menu.route }">{{menu.msg}}</a>
        </template>
        Built with <a href="http://vuejs.org" target="_blank">Vue.js</a> |
        <a href="https://github.com/yyx990803/vue-hackernews" target="_blank">Source</a>
      </span>
    </div>
</template>
<script>
export default {

  name: 'MyHeader',

  data () {
    return {
      menus: [
          {route:'/foo',msg:'foo'},
          {route:'/bar',msg:'bar'},
          {route:'/news',msg:'news'}
      ]
    }
  }
}
</script>

<style lang="stylus">
    #header
      background-color #f60
      height 24px
      position relative
      h1
        font-weight bold
        font-size 13px
        display inline-block
        vertical-align middle
        margin 0
      .source
        color #fff
        font-size 11px
        position absolute
        top 4px
        right 4px
        a
          margin:0 10px;
          color #fff
          &:hover
            text-decoration underline
</style>
