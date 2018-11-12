import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Home from './components/Home.vue';

Vue.component('app-server-status', Home);

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
