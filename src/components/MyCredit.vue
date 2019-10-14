<template>
  <div>
    <div :class="'panel ' + (tabActive == 'MyCredit' ? 'coc-tab-content-active' : 'coc-tab-content')">
      <div class="panel-heading coc-panel-heading">
        <div class="columns is-mobile is-multiline is-gapless">
          <div class="column is-two-thirds"><h5 class="title is-5">My Credit Score</h5></div>
          <div class="column">
            <div class="columns">
              <div class="column is-10 coc-report-dashboard coc-dashboard-action">
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
        <div class="columns">
          <!-- GAUGE -->
          <div class="column">
            <div>
              <div class="columns">
                <div class="column">
                  <div style="margin: 0 auto">
                    <highcharts :options="VGauge" />
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div>
                    <div class="columns is-mobile">
                      <div class="column">
                        <div class="notification is-link"></div>
                      </div>
                      <div class="column">
                        <div class="notification is-info"></div>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <div class="notification is-success"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- LINE CHART -->
          <div class="column">
            <div>
              <div class="columns is-mobile">
                <div class="column is-one-quarter">
                  <div class="notification is-primary"></div>
                </div>
                <div class="column">
                  <div class="notification is-primary"></div>
                </div>
                <div class="column is-three-fifths">
                  <div class="notification is-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  },
  data() {
    return {
      VGauge: {
        chart: {
          type: 'gauge',
        },
        title: {
          text: null
        },
        pane: {
          startAngle: -90,
          endAngle: 90, 
          background: null
        },
        // the value axis
        yAxis: {
          min: 0,
          max: 1000,

          minorTickInterval: 'auto',
          minorTickWidth: 0,
          minorTickLength: 5,

          tickPixelInterval: 30,
          tickWidth: 0,
          tickHeight: 50,
          tickLength: '20%',
          labels: {
            enabled: false,
          },
          plotBands: [{
            from: 0,
            to: 83.33,
            color: '#d35653',
            thickness: '30%',
          }, {
            from: 83.33,
            to: 166.66,
            color: '#d66c56',
            thickness: '30%',
          }, {
            from: 166.66,
            to: 249.99,
            color: '#d88358',
            thickness: '30%',
          }, {
            from: 249.99,
            to: 333.32,
            color: '#dd995b',
            thickness: '30%',
          }, {
            from: 333.32,
            to: 416.65,
            color: '#e0b05b',
            thickness: '30%',
          }, {
            from: 416.65,
            to: 499.98,
            color: '#e3c85f',
            thickness: '30%',
          }, {
            from: 499.98,
            to: 583.31,
            color: '#c6c261',
            thickness: '30%',
          }, {
            from: 583.31,
            to: 666.64,
            color: '#aabf64',
            thickness: '30%',
          }, {
            from: 666.64,
            to: 749.97,
            color: '#8eb967',
            thickness: '30%',
          }, {
            from: 749.97,
            to: 833.3,
            color: '#70b367',
            thickness: '30%',
          }, {
            from: 833.3,
            to: 916.63,
            color: '#55b06a',
            thickness: '30%',
          }, {
            from: 916.63,
            to: 1000,
            color: '#3aab6d',
            thickness: '30%',
          }]
        },
        plotOptions: {
          gauge: {
            dial: {
              radius: '50%',
              baseWidth: 10,
              baseLength: '90%', // of radius
              rearLength: '20%'
            }
          }
        },
        series: [{
            name: 'Speed',
            data: [150],
        }]
      }
    }
  }
}
</script>