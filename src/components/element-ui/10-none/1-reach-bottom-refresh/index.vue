<template>

  <div class='reach-bottm'>
    <div>ReachBottm</div>
    <div class="reach-bottm-wrap" ref="ReachBottmWrap">
      <div class="reach-bottm-content">
        <div class="reach-bottm-item" v-for="(item, index) in data" :key="index">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/*
1. 正常引入组件
2. 如何使用
3. 看下是如何解决问题的
4. 得到基本的结构
5. 我要看的效果是，加上一个wrap是如何解决问题的
6. 此时是没加wrap的，还有一点就是clientHeight计算出来是小数的话，得到的是整数，所以这里已经出现问题了
7. 如果加上wrap的话，是否有效，也就是说，这里并没有解决问题
8. 没有解决问题
9. 为什么昨天一用上去就可以了
10. 当clientHeight为整数时，有效果，为小数时不行，这三个值都会四舍五入，会有误差，怎么办
11. 高度会变，那就是下使用getRectb
12. 也就是说这个问题还没有解决，出现问题的原因就是值会四舍五入，存在误差
*/
const Default = ['-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10']
export default {
  name: "MyReachBottm",
  data() {
    return {
      loading: false,
      data: ['-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10']
    }
  },
  methods: {
    handleScroll() {
      console.log('handleScroll')
      let ReachBottmWrap = this.$refs.ReachBottmWrap
      let { scrollHeight, scrollTop, clientHeight } = ReachBottmWrap
      // 1. 看下每次触发请求时的三个值分别是多少
      // 2. 问题的出现在于如果没有wrap的话，可能会得到负的值，出现负值的原因是因为clientHeight出现小数，取值不准
      // 3. 让clientHeight出现小数，看下加wrap和不加wrap的区别是什么
      console.log('scrollHeight', scrollHeight, 'scrollTop', scrollTop, 'clientHeight', clientHeight)
      if (Math.abs(scrollHeight - scrollTop - clientHeight) < 0.5) {
        console.log('触底')
        // this.data.concat(Default)
        setTimeout(() => {
          Default.forEach((item) => {
            this.data.push(item)
          })
        }, 500)
      }
    }
  },
  mounted() {
    let ReachBottmWrap = this.$refs.ReachBottmWrap
    ReachBottmWrap.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
.reach-bottm-wrap {
  height: calc(100vh - 200px);
  overflow: auto;
  overflow-x: hidden;
  background-color: skyblue;
  .reach-bottm-item {
    height: 40px;
  }
}
</style>