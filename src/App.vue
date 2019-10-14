<template>
  <div>
    <navbar></navbar>
    <div class="main-content-container">
      <!-- tabs -->
      <div class="tabs is-boxed is-fullwidth coc-tabs coc-dashboard-tabs">
        <ul>
          <li v-for="tab in tabs" :key="tab.key" :class="tabActive == tab.key ? 'is-active' : ''" @click="tabActive = tab.key">
            <a><span class="icon is-large"><i :class="tab.icon" aria-hidden="true"></i></span></a>
          </li>
        </ul>
      </div>
      <!-- tab contents -->
      <div class="columns coc-is-gapless">
        <div class="column coc-tab-column">
          <MyCredit :tabActive="tabActive" />
        </div>
      </div>
      <div class="columns">
        <div class="column coc-tab-column">
          <FuelPrices :tabActive="tabActive" />
        </div>
        <div class="column coc-tab-column">
          <MyShoppingList :tabActive="tabActive" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 'MyCredit',
      tabs: [
        { key: 'MyCredit', title: 'My Credit Score', icon: 'fas fa-tachometer-alt' },
        { key: 'FuelPrices', title: 'Fuel Prices', icon: 'fas fa-fire-alt' },
        { key: 'MyShoppingList', title: 'My Shopping List', icon: 'fas fa-shopping-cart' },
      ]
    }
  }
}
</script>