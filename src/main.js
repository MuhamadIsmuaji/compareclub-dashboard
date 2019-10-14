import './assets/styles/main.scss';

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import Vue from 'vue'
import App from './App.vue'

// components
import Navbar from './components/Navbar';
import MyCredit from './components/MyCredit';
import FuelPrices from './components/FuelPrices';
import MyShoppingList from './components/MyShoppingList';

Vue.component('Navbar', Navbar);
Vue.component('MyCredit', MyCredit);
Vue.component('FuelPrices', FuelPrices);
Vue.component('MyShoppingList', MyShoppingList);

import Highcharts from 'highcharts'
import VueHighcharts from 'highcharts-vue'
import highchartsMore from 'highcharts/highcharts-more'

highchartsMore(Highcharts)
Vue.use(VueHighcharts, {highcharts: Highcharts})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
