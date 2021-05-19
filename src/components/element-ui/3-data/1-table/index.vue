<template>
  <div class='table'>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <!-- 原生table -->
    <table>
      <!-- 一行 -->
      <tr>
        <th>0，1</th>
        <th>0，2</th>
        <th>0，3</th>
      </tr>
      <tr>
        <td>1，1</td>
        <td>1，2</td>
        <td>1，3</td>
      </tr>
      <tr>
        <td>2，1</td>
        <td>2，2</td>
        <td>2，3</td>
      </tr>
    </table>
  </div>
</template>

<script>
/**
   1. 使用组件
   2. 有一个table，还有一个table-column
     1. table表示整个表格，table-column表示表格的每一列，因为按照常规就是，同一列显示的数据才是有共性的数据，所以该是以列为基准
     2. table的data属性是一个数组，数组中是一个个的对象，对象中的属性名和table-column中prop属性的值是对应的
     3. table-column中的属性label就是显示的列名，width可以定义列宽
   3. table
     1. stripe
       1. 类型：布尔
         1. true: 显示条纹
         2. false: 不显示条纹
       2. 如何改变条纹的颜色
         1. stripe传进去只是说此时是条纹显示，颜色是有table-body中具体控制的
         2. 组件不一定要是.vue文件，.js文件也是可以的，只不过在.js文件中，是通过render函数来渲染节点的
         3. 你需要的，别人也都有可能想到过，所以先想一下源码里面有没有
   4. table-column
 */
export default {
  name: "Table",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]}
  }
}
</script>

<style></style>