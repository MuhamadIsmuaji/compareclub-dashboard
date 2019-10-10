import './assets/styles/main.scss';

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import Vue from 'vue'
import App from './App.vue'

// components
import Navbar from './components/Navbar';
Vue.component('Navbar', Navbar);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
