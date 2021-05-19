import Vue from 'vue'
import App from './App.vue'
import { DatePicker, Table, TableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
