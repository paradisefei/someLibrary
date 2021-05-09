<template>
  <div class="radio">
    <van-radio-group v-model="checked" direction="horizontal">
      <van-radio name="1">单选框1
        <template v-slot:icon="props">
          <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
        </template>
      </van-radio>
      <van-radio name="2">单选框2</van-radio>
    </van-radio-group>
  </div>
</template>

<script>
/**
    1. 看下van-radio中是如何使用的
    2. Vue.use()
      1. 插件，自定义插件
      2. 在vue中就可以直接使用
      3. 参数
        1. 对象：必须提供install方法
        2. 方法：该方法会被当做install方法
      4. 注册进来的话，就可以直接当成组件使用，相当于就是注册组件
    3. Vue.component()
      1. 注册组件
    4. 样式引入
    5. 如何通过v-model来绑定数据的
      1. 组建中使用v-model来绑定数据是如何实现的
    6. 和radio中的name属性绑定是如何实现的
    7. render
      1. $el,mount()，template
      2. 渲染函数
      3. 可以在一个模板里，也可以在一个渲染函数中
      4. 每一个页面中的template是如何最终渲染到页面上去的，渲染函数又是怎么把东西渲染上去的
      5. render是和methods同级的
      6. 参数
        1. (createElement: () => VNode) => VNode
        2. 参数是一个函数，函数名为createElement，
        3. render内部执行createElement这个函数，这个函数本身会返回虚拟节点
      7. 返回一个虚拟节点
    8. 执行 
        1. 先触发了点击事件，在这个事件对象上得到了对应的复选框的值
        2. 改变了currentVaule的值
        3. 出发了radio父组件即radio-group的input事件，改变了radio-group的value值
        4. 监视到值的变化，触发change方法，修改数据
 */
import Vue from 'vue';
import { RadioGroup, Radio } from 'vant'
import 'vant/lib/index.css';
Vue.use(Radio)
Vue.use(RadioGroup)
export default {
  // name: "radio",
  components: {
    // RadioGroup,
    // Radio
  },
  data() {
    return {
      radio: '1',
      checked: '1',
      activeIcon: 'https://img01.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    }
  },
  methods: {
    handleChange(val) {
      console.log('11111111111', val)
    }
  }
}
</script>

<style>
  .img-icon {
    height: 20px;
  }
</style>