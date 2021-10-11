<template>
  <div class="layout">
      <el-row>
          <el-col :span="24" class="grid-content bg-purple-drak"></el-col>
      </el-row>
      <el-row>
          <el-col :span="12" class="grid-content bg-purple"></el-col>
          <el-col :span="12" class="grid-content bg-purple-light"></el-col>
      </el-row>
      <el-row>
          <el-col :span="8" class="grid-content bg-purple"></el-col>
          <el-col :span="8" class="grid-content bg-purple-light"></el-col>
          <el-col :span="8" class="grid-content bg-purple"></el-col>
      </el-row>
  </div>
</template>

<script>
/**
  - layout布局并不是直接使用layout组件，而是通过el-row和el-col来实现的
  - 如果列的span总和大于24，列就会自动换行
  - 如何实现栅格布局
 */
export default {
  name: 'Layout',
  data() {
    return {}
  },
  mounted() {
      console.log(this)
  }
}
</script>

<style lang="scss">
.layout {
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .grid-content {
        height: 24px;
        border-radius: 8px;
    }
    .bg-purple-drak {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
}
</style>