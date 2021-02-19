import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'
import './index.css';

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
