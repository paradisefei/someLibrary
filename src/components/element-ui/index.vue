<template>
    <div class="element-ui">
      <my-date-time></my-date-time>
    </div>
</template>

<script>
import MyDateTime from "./2.form/11.date-time-picker"
export default {
    name: "ElementUI",
    data() {
        return {}
    },
    components: {
        MyDateTime
    }
}
</script>

<style>
.element-ui {
  text-align: center;
  margin-top: 100px;
}
</style>