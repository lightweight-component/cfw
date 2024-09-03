import Vue from 'vue'
import App from './App.vue'
import hello from '@ajaxjs/configurable-widget-vue2';

Vue.config.productionTip = false;
console.log(hello)
Vue.use(hello);

new Vue({
  render: h => h(App),
}).$mount('#app')
