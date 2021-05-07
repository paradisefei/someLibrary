<template>
    <div class="drawing-shapes">
      <canvas id="drawing_shapes" height="300" width="300"></canvas>
    </div>
</template>

<script>
/**
绘制形状
  1. 栅格
    1. 起点在左上角，元素的定位是元素左上角相对于栅格左上角定位
  2. 绘制矩形
    1. canvas只能画矩形和线段，其他形状都是由这两种形状拼接成的，只不过是通过内部方法来实现这种拼接
  3. 绘制路径
    1. beginPath()
      1. 当要开始新路径时，调用此方法
      2. 先定义一个路径，然后对其描边或填充。路径可以理解为使用画笔画出的任意线条，这些线条甚至可以不用相连
      3. 提供了一系列的方法来绘制路径，这些方法是用来绘制路径的
    2. fill()
      1. 会自动闭合路径，不需要调用closePath()
    3. stroke()
      1. 不会自动闭合路径，需要主动调用closePath()
 */
export default {
  name: 'DrawingShapes',
  data() {
      return {
        ctx: {}
      }
  },
  methods: {
    initCanvas() {
      const canvas = document.getElementById('drawing_shapes')
      this.ctx = canvas.getContext('2d')
      this.simpleExample()
    },
    simpleExample() {
      // 顺序
      // 画一个填充的矩形: 填充的颜色怎么改
      // this.ctx.fillRect(50, 50, 200, 200)
      // this.ctx.clearRect(100, 100, 100, 100)
      // // 画一个矩形框: 矩形框的border多宽
      // this.ctx.strokeRect(110, 110, 80, 80)
      // this.ctx.beginPath()
      // 移动子路径的起点到指定位置，移动画笔的起点
      // this.ctx.moveTo(0, 0)
      // this.ctx.lineTo(100, 100)
      // 使用直线连接子路径的终点到指定位置，并不是真正的绘制
      // this.ctx.lineTo(100, 25)
      // this.ctx.fill()
      // this.ctx.closePath()
      // this.ctx.stroke()
      // this.ctx.beginPath()
      // this.ctx.moveTo(200, 200)
      // this.ctx.lineTo(300, 200)
      // this.ctx.lineTo(250, 250)
      // this.ctx.fill()
      // this.ctx.arc(100, 100, 50, 0, Math.PI * 0.3, true)
      // this.ctx.fill()
      // this.ctx.rect(10, 10, 100, 100)
      // this.ctx.fill()
    }
  },
  mounted() {
    this.initCanvas()
  }
}
</script>

<style>
.drawing-shapes #drawing_shapes {
    /* border: 1px solid red; */
    background-color: skyblue;
    /* box-sizing: border-box; */
}
</style>