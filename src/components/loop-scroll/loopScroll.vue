<template>
  <div
    class="vue-loop-scroll-box loop-scroll-container"
    :class="direction == 'left' ? 'left' : ''"
    ref="LoopScrollContainer"
  >
    <div class="loop-scroll-content" :style="contentStyle">
      <div class="vue-loop-scroll-item1" ref="LoopScrollContent">
        <slot></slot>
      </div>
      <div class="vue-loop-scroll-item2" :style="{ marginLeft: intervalMargin + 'px' }" v-show="showContent2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
// 1. 不是只要满足这次的业务需求就好，而是能否封装成一个组件
// 2. 组件的设计思路，原本的只要满足这次的业务需求就好，是因为什么，就是因为觉得自己想不到那么多，一要想多就头痛，所以就索性不想
// 3. 组件的实现，不是楞想，是有一定的思路的
// 4. 每天都在搬砖，每次都在同一个问题上跌倒，每天都在做重复的工作，而且对于团队没有任何贡献，影响的人越多，对别人的影响越大，价值越大
// 5. 这个东西封装出来，别人拿去能不能直接用，别人用起来会怎么样，核心点在于，类似的场景别人能拿去用，并且用的舒服
// 6. 我这个场景都不满足，怎么去满足其他场景，所以我要先做到满足我正在做的需求，然后再去想怎么封装成一个组件
export default {
  name: "LoopScroll",
  data() {
    return {
      intervalMargin: 24,
      showContent2: true,
      offset: 0,
      duration: 0,
      scrollTimer: null,
      scrollTimer2: null,
    };
  },
  computed: {
    contentStyle() {
      return {
        transform: `translateX(-${this.offset}px)`,
        "transition-duration": `${this.duration}s`,
      }
    }
  },
  props: {
    count: { default: 0 },
    direction: { default: "left" },
    speed: { default: 30 },
    index: { default: 0 },
  },
  mounted() {
    this.setScroll();
  },
  methods: {
    setScroll() {
      this.containerWidth =
        this.$refs.LoopScrollContainer.getBoundingClientRect().width;
      this.contentWidth =
        this.$refs.LoopScrollContent.getBoundingClientRect().width;

      // 如果contentWidth<containerWidth，intervalMargin为相减，否则为12
      if (this.contentWidth < this.containerWidth) {
        this.intervalMargin = this.containerWidth - this.contentWidth + 1;
      } else {
        this.intervalMargin = 24;
      }
      this.offset = this.contentWidth + this.intervalMargin;
      this.duration = this.offset / this.speed;

      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(() => {
        this.duration = 0
        this.offset = 0
        clearTimeout(this.scrollTimer2);
        this.scrollTimer2 = setTimeout(() => {
          this.setScroll()  
        })
      }, this.duration * 1000 + 300);
    },
  },
};
</script>
<style lang="scss">
.loop-scroll-container {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
   .left {
    white-space: nowrap;
  }
}
.loop-scroll-content {
  display: flex;
  position: relative;
  transition-timing-function: linear;
}
</style>