<template>
    <div class="select">
      <el-select
        v-model="value"
        @blur="blur"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span slot="default"><span style="color: red">111111111</span>&nbsp;   <span style="color: green">{{ item.label }}</span></span>
        </el-option>
      </el-select>
    </div>
</template>

<script>
// 1. 查看blur方法到底是在什么时候触发的
export default {
  name: "Select",
  data() {
    return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  methods: {
    blur(val) {
      console.log('blur', val)
    }
  }
}
</script>

<style>

</style>