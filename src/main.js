import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';
// import Signup_page from './views/Signup_page.vue'
// import VueRouter from 'vue-router'
Vue.use(Vuetify)
// Vue.use(router)

// const routes =[
//   {paths: '/signin', App},
//   {paths: '/signup', Signup_page}

// ]
// const router = new VueRouter({
//   routes
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
