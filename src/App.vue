<template>
  <div id="app">
    <!-- <my-canvas></my-canvas> -->
    <!-- <my-echarts></my-echarts> -->
    <!-- <my-vant></my-vant> -->
    <my-element></my-element>
    <!-- <my-loop-scroll /> -->
  </div>
</template>

<script>
// import MyCanvas from './components/canvas/index'
// import MyECharts from './components/echarts'
// import MyVant from './components/vant'
import MyElement from './components/element-ui'
// import MyLoopScroll from './components/loop-scroll/index.vue'
export default {
  name: 'App',
  components: {
    // MyCanvas,
    // MyECharts
    // MyVant,
    MyElement
    // MyLoopScroll
  }
}
</script>

<style>
</style>
