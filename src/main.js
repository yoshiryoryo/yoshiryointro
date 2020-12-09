import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router';
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  VueTypedJs,
  render: h => h(App)
}).$mount('#app')
