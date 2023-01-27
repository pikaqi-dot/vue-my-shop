import Vue from "vue";
import App from "./App.vue";
import goods from './components/goods'
import VueRouter from "vue-router";
import Vuex from "vuex";
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes: [{
    path:'/goods',
    component: goods
  },
]
});

// const store = new Vuex.Store({});
new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
