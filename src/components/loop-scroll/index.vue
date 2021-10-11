<template>
    <div class="my-loop-scroll" style="width: 150px">
        <loop-scroll :key="count">
            <div slot="default">
                112223334444455555
            </div>
        </loop-scroll>
        <button @click="handle">按钮</button>
    </div>
</template>

<script>
// 1. 封装成一个组件
// 2. 使用绝对定位和transform实现
import LoopScroll from './loopScroll.vue'
export default {
  components: {
    LoopScroll
  },
  data() {
      return {
          count: 0
      }
  },
  methods: {
      handle() {
          this.count++
      }
  }
};
</script>

<style lang="scss">
.my-loop-scroll {

}
</style>