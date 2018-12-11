import Vue from 'vue';
import './plugins/vuetify';
import Home from './components/Home.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.http.options.root = 'https://nba-stats-46f17.firebaseio.com/teams';
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == 'POST') {
//     request.method = 'PUT';
//   }
//   next(response => {
//     response.json = () => { return { messages: response.body } }
//   });
// });


Vue.component('app-server-status', Home);

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
