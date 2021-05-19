<template>
  <div class="data">
    <my-table></my-table>
  </div>
</template>

<script>
/**
   1. 看表格这个组件
     1. 引入表格
   2. 使用原生写一个table
  */
import MyTable from './1-table'
export default {
  name: 'Data',
  data() {
    return {}
  },
  components: {
    MyTable
  }
}
</script>

<style></style>