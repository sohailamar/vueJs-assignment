import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import MainFruitListsVue from './components/MainFruitLists';
import FavoritFruitsVue from './components/FavoritFruits.vue';
Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainFruitListsVue
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: FavoritFruitsVue,
      props: () => ({
        favouriteFruits: [{name: "uamir"}]
      })
    }
  ]
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
