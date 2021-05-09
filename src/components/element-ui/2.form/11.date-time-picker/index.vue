<template>
    <div class="date-time-picker">
        <el-date-picker
          v-model="dayValue"
          type="date"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions"
          @change="handleDayValue">
        </el-date-picker>
    </div>
</template>

<script>
/**
    1. 时间选择，日期选择，日期时间选择
    2. 标签的名称，我会以为和注册时的名称一样，但是引入插件的话，是从name属性中来的
    3. 日期和日期选择是同一个组件，只是type不同
    4. 日期选择器
      1. 基本单位
      2. 快捷选项
      3. 禁用日期
    5. 日为单位
      1. 使用v-model绑定数值
        1. 点击进行选择之后，dayValue的值就已经改变了
        2. 要对时间进行格式化
      2. 默认值改如何设置
        1. 一开始的时候是没有时间的，那么绑定的时间也就没有了
      3. 日期格式问题
        1. 默认情况下得到的日期格式是Date对象，要格式化为对应需要的格式
        2. 显示在输入框的日期格式；选择点击时，得到的数据的值
          1. 使用format指定显示在输入框的日期的格式
          2. 使用value-format指定得到的数据日期的格式
      4. 禁用日期
        1. 指定哪些日期是能选择的，哪些日期是不能选择的
        2. 禁用日期使用哪个属性来配置
 */
export default {
  name: "DateTimePicker",
  data() {
      return {
        dayValue: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      }
  },
  methods: {
      handleDayValue() {
        console.log('handleDayValue', this.dayValue)
      }
  }
}
</script>

<style>

</style>