<template>
  <div>
    <navbar></navbar>
    <div class="main-content-container">
      <div class="tabs is-boxed is-fullwidth coc-tabs coc-dashboard-tabs">
        <ul>
          <li :class="tabActive == 'gauge' ? 'is-active' : ''" @click="tabActive = 'gauge'">
            <a><span class="icon is-large"><i class="fas fa-image fa-2x" aria-hidden="true"></i></span></a>
          </li>
          <li :class="tabActive == 'other' ? 'is-active' : ''" @click="tabActive = 'other'">
            <a><span class="icon is-large"><i class="fas fa-image fa-2x" aria-hidden="true"></i></span></a>
          </li>
        </ul>
      </div>
      <!-- tab contents -->
      <div :class="'panel ' + (tabActive == 'gauge' ? 'coc-tab-content-active' : 'coc-tab-content')">
        <div class="panel-block coc-panel-block coc-panel-block-gap">
          <h1>Gauge Content</h1>
        </div>
      </div>
      <div :class="'panel ' + (tabActive == 'other' ? 'coc-tab-content-active' : 'coc-tab-content')">
        <div class="panel-block coc-panel-block coc-panel-block-gap">
          <h1>Other Content</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 'gauge',
    }
  },
  methods: {
    test() {
      
    }
  }
}
</script>