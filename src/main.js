import Vue from 'vue'
import App from './App.vue'
import VDPhoto from 'vue-dark-photo'
import 'vue-dark-photo/lib/vue-dark-photo.css'

Vue.use(VDPhoto)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
