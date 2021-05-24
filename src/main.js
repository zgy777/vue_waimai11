import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from "vue-lazyload";


import './mock/mockServer'
import './fiters/index'
import loading from './common/imgs/loading.gif'


Vue.use(VueLazyload, {loading})
Vue.component(Button.name,Button)

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
