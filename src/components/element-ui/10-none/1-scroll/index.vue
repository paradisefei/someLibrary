<template>
  <div class='scroll-bar'>
    <div>Scrollbar</div>
    <div class="scroll-bar-wrap">
      <el-scrollbar wrap-class="list">
        <div v-for="item in 100" :key="item">{{ item }}</div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
/*
1. 正常引入组件
2. 如何使用

*/
export default {
  name: "MyScrollBar",
  data() {
    return {}
  },
  methods: {},
  mounted() {
  }
}
</script>

<style lang="scss">
.scroll-bar {
  .scroll-bar-wrap {
    // width: 100px;
    // height: 500px;
    background-color: beige;
    .list {
      max-height: 500px;
    }
  }
}
</style>