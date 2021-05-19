<template>
    <div class="element-ui">
      <!-- <my-date-time></my-date-time> -->
      <my-data></my-data>
    </div>
</template>

<script>
/**
    1. 看表格的源码
    2. 表格是在第三块data这一块
    3. 引入data
 */
// import MyDateTime from "./2.form/11.date-time-picker"
import MyData from "./3-data"
export default {
    name: "ElementUI",
    data() {
        return {}
    },
    components: {
        // MyDateTime,
        MyData
    }
}
</script>

<style>
.element-ui {
  text-align: center;
  margin-top: 100px;
}
</style>