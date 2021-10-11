<template>
  <div
    class="vue-loop-scroll-box loop-scroll-container"
    :class="direction == 'left' ? 'left' : ''"
    :style="containerStyle"
    ref="LoopScrollContainer"
  >
    <div class="loop-scroll-content" :style="contentStyle" @transitionend="handleTransitionend">
      <div class="vue-loop-scroll-item1" ref="LoopScrollContent">
        <slot></slot>
      </div>
      <div class="vue-loop-scroll-item2" :style="{marginLeft: intervalMargin + 'px'}" v-if="showContent2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoopScroll",
  data() {
    return {
      intervalMargin: 24,
      showContent2: true,
      containerStyle: {},
      contentStyle: {}
    }
  },
  props: {
    count: { default: 0 },
    direction: { default: "left" },
    speed: { default: 50 },
    index: { default: 0 }
  },
  mounted() {
    this.setScroll()
  },
  methods: {
    setScroll() {
      var sitem1 = document.getElementsByClassName("vue-loop-scroll-item1")[this.index];
      var sitem2 = document.getElementsByClassName("vue-loop-scroll-item2")[this.index];
      sitem2.innerHTML = sitem1.innerHTML;

      this.containerWidth = this.$refs.LoopScrollContainer.getBoundingClientRect().width
      this.contentWidth = this.$refs.LoopScrollContent.getBoundingClientRect().width

      // 如果contentWidth<containerWidth，intervalMargin为相减，否则为12
      if (this.contentWidth < this.containerWidth) {
        this.intervalMargin = this.containerWidth - this.contentWidth + 1
      } else {
        this.intervalMargin = 24
      }
      this.offset = this.contentWidth + this.intervalMargin
      this.duration =  this.offset / this.speed

      clearTimeout(this.scrollTimer)
      this.scrollTimer = setTimeout(() => {
        this.contentStyle = {
          transform: `translateX(-${this.offset}px)`,
          'transition-duration': `${this.duration}s`,
          'transition-timing-function': 'linear'
        }
      }, 300)
    },
    // 1. 当transition事件结束时触发transitionend事件，此时将content定位重置之后，如何在重置后重新动起来
    handleTransitionend() {
      this.contentStyle = {
        left: '0px'
      }
      this.setScroll()
    },
  }
};
</script>

<style lang="scss">
.loop-scroll-container {
  position: relative;
  overflow: hidden;
  &.left {
    white-space: nowrap;
  }
}
.loop-scroll-content {
  display: flex;
  position: relative;
}
</style>