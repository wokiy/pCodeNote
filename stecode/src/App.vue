<!--
 * @Author: jasonlwy jasonlwy@163.com
 * @Date: 2023-01-27 14:59:26
 * @LastEditors: jasonlwy jasonlwy@163.com
 * @LastEditTime: 2023-01-27 23:12:30
 * @FilePath: /codeYD/stecode/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <h1>狮头鹅信息网</h1>
    <router-view/>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
  export default {
    name: 'APP'
  }
</script>
<style lang="less">
</style>
