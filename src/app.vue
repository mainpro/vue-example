<template>
<div id="box">
  <input type="text">
</div>
<test></test>
</template>

<script>
module.exports = {
  components : {
    'test' : require('./test.vue')
  }
}
</script>