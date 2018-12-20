// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(VueResource);

Vue.config.productionTip = false
Vue.router = router

Vue.http.options.root = 'https://kkmaejd863.execute-api.us-east-1.amazonaws.com/dev';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
