<template>
    <div class="element-ui">
        <!-- <my-basic></my-basic>  -->
        <my-form></my-form>
      <!-- <my-date-time></my-date-time> -->
      <!-- <my-data></my-data> -->
      <!-- <my-nav></my-nav> -->
      <!-- <my-none></my-none> -->
    </div>
</template>

<script>
// import MyBasic from "./1-basic"
import MyForm from "./2.form"
// import MyDateTime from "./2.form/11.date-time-picker"
// import MyData from "./3-data"
// import MyNav from "./5-nav"
// import MyNone from "./10-none"
export default {
    name: "ElementUI",
    data() {
        return {}
    },
    components: {
        // MyDateTime,
        // MyData,
        // MyBasic,
        MyForm
        // MyNav,
        // MyNone
    }
}
</script>

<style>
.element-ui {
  text-align: center;
  margin-top: 100px;
}
</style>