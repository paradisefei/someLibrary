<template>
    <div class="input">
      <el-input v-model="value" v-only-number="{max:100,min:0,precision:2}" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
// 1. 要的输入框是什么样的
  // 1. 只能输入数字
  // 2. 只能输入0-100之间的数字
  // 3. 按键不是数字则不能输入
  // 4. 按键得到的值若不在范围内，则不能输入，并给出提示
export default {
  name: "Input",
  data() {
    return {
      value: 100
    }
  },
  methods: {
  }
}
</script>

<style>

</style>