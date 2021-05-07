<template>
  <div class="radio">
    <van-radio-group v-model="checked">
      <van-radio name="1">单选框1</van-radio>
      <van-radio name="2">单选框2</van-radio>
    </van-radio-group>
  </div>
</template>

<script>
import Vue from 'vue';
import { RadioGroup, Radio } from 'vant'
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
        checked: '1'
      }
  }
}
</script>

<style>

</style>