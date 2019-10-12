<template>
  <div>
    <div :class="'panel ' + (tabActive == 'FuelPrices' ? 'coc-tab-content-active' : 'coc-tab-content')">
      <div class="panel-heading coc-panel-heading">
        <div class="columns is-mobile is-multiline is-gapless">
          <div class="column is-two-thirds"><h5 class="title is-5">Fuel Prices</h5></div>
          <div class="column">
            <div class="columns">
              <div class="column is-8 coc-report-dashboard coc-dashboard-action">
                <p class="has-text-right">View Report</p>
              </div>
              <div class="column coc-help-dashboard-icon-container">
                <p class="has-text-centered"><i class="far fa-question-circle fa-lg"></i></p>
              </div>
            </div>
          </div>
          <div class="column is-full coc-panel-heading-divider-container">
            <hr class="coc-panel-heading-divider">
          </div>
        </div>
      </div>
      <div class="panel-block coc-panel-block coc-panel-block-gap">
        <h1>This some contents</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabActive: {
      type: String,
      required: true,
    }
  }
}
</script>