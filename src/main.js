import Vue from 'vue'
import App from './App.vue'
import { Col, DatePicker, Row, Table, TableColumn, Input, Select, Option, Dropdown, DropdownItem, DropdownMenu, Scrollbar } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import onlyNumber from './components/element-ui/2.form/3-input/index.js'

Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Scrollbar)

Vue.use(onlyNumber)
Vue.config.productionTip = false
console.log('main', Scrollbar)

new Vue({
  render: h => h(App),
}).$mount('#app')
