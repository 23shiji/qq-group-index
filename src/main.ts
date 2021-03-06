import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/vue-material-helper'


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted(){
    this.$store.dispatch('updateIndex')
  }
}).$mount('#app');
