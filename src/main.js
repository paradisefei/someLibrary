import Vue from 'vue'
import App from './App.vue'
import { Col, DatePicker, Row, Table, TableColumn, Select, Option, Dropdown, DropdownItem, DropdownMenu, Scrollbar } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Scrollbar)

Vue.config.productionTip = false
console.log('main', Scrollbar)

new Vue({
  render: h => h(App),
}).$mount('#app')
