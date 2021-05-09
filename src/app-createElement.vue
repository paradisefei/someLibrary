
<script>
/**
    1. 不适用template模板来写html，直接使用render函数也是可以写的，也就是说，render函数可以实现和template模板一样的效果，或者可以猜测，template底层就是使用render函数来渲染的
    2. 第二个参数是一个对象，对象中可以有哪些属性，第二个参数一定是一个对象
    3. 分三个部分：标签本身，标签属性，该标签的子标签
*/
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {
    handleClick() {
      console.log('11111111111111')
    }
  },
  render(createElement) {
    console.log('createElement', createElement)
    return createElement('h1', { class: 'test', style: { color: 'red'}, on: { click: this.handleClick }}, 'hello world')
  }
}
</script>

<style>
</style>
