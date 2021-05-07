<template>
  <div class="radio">
    <van-radio-group v-model="checked">
      <van-radio name="1">单选框1</van-radio>
      <van-radio name="2">单选框2</van-radio>
    </van-radio-group>
  </div>
</template>

<script>
import { VanRadioGroup, VanRadio } from 'vant'
console.log('11111111111111', VanRadioGroup, VanRadio)
export default {
  name: "radio",
  components: {
    VanRadioGroup,
    VanRadio
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