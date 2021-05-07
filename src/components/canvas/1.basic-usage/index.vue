<template>
    <div class="basic-usage">
      <canvas id="basic_usage" height="300" width="300"></canvas>
    </div>
</template>

<script>
/**
基本用法
  1. canvas元素
    1. 可以使用css来设置canvas的样式，比如margin，border等，但不会影响canvas内部的图像
  2. 替换内容
    1. 某些较老的浏览器不支持canvas，能看到替换内容
  3. </canvas>不可省
  4. 渲染上下文
    1. canvas是空白的，脚本需要找到渲染上下文才能在上面绘制
    2. getContext()找到对应的渲染上下文
    3. 首先要找通过id找到canvas对象，再调用对象上的getContext()获得渲染上下文
  5. 一个模板骨架
    1. 有些浏览器是不支持canvas的，在不支持canvas时就会显示替代内容
 */
export default {
  name: 'BasicUsage',
  data() {
      return {
        ctx: {}
      }
  },
  methods: {
    initCanvas() {
      const canvas = document.getElementById('basic_usage')
      this.ctx = canvas.getContext('2d')
      this.simpleExample()
    },
    simpleExample() {
      this.ctx.fillStyle = "rgb(200, 0, 0)"
      this.ctx.fillRect(10, 10, 55, 50)

      this.ctx.fillStyle = "rgb(0, 0, 200, 0.5)"
      this.ctx.fillRect(30, 30, 55, 50)
    }
  },
  mounted() {
    this.initCanvas()
  }
}
</script>

<style>
.basic-usage #basic_usage {
    /* border: 1px solid red; */
    background-color: skyblue;
    /* box-sizing: border-box; */
}
</style>