<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-stats card-raised">
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-primary">
                      <i class="now-ui-icons sport_user-run"/>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="24"/>
                    </h3>
                    <h6 class="stats-title">Attending Games</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-success">
                      <i class="now-ui-icons ui-1_calendar-60"/>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="4"/>
                    </h3>
                    <h6 class="stats-title">Pending Invites</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-info">
                      <i class="now-ui-icons sport_trophy"/>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="56"/>
                    </h3>
                    <h6 class="stats-title">Games Participated</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="statistics">
                  <div class="info">
                    <div class="icon icon-danger">
                      <i class="now-ui-icons education_agenda-bookmark"/>
                    </div>
                    <h3 class="info-title">
                      <animated-number :value="3"/>
                    </h3>
                    <h6 class="stats-title">Games Organized</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <card>
          <h4
            slot="header"
            class="card-title">Upcoming Games</h4>
          <div class="table-responsive">
            <n-table
              :data="gamesTable"
              class="table-shopping">

              <template slot="columns">
                <th>
                  Game
                </th>
                <th>
                  Sport
                </th>
                <th>
                  Players Needed
                </th>
                <th class="text-right">
                  Participate
                </th>
              </template>

              <template slot-scope="{row}">

                <td class="td-name">
                  <a href="#jacket">{{ row.title }}</a>
                  <br>
                  <small>{{ row.subTitle }}</small>
                </td>

                <td>{{ row.sport }}</td>

                <td>{{ row.playersNeeded }}</td>

                <td>
                  <n-button
                    type="primary"
                    size="sm"
                    class="mx-1"
                    round
                    icon>
                    <i class="now-ui-icons ui-1_check"/>
                  </n-button>
                  <n-button
                    type="default"
                    size="sm"
                    class="mx-1"
                    round
                    icon>
                    <i class="now-ui-icons ui-1_simple-remove"/>
                  </n-button>
                </td>
              </template>

            </n-table>
          </div>

        </card>
      </div>

      <div class="col-md-6">
        <card class="card-map">
          <div slot="header">
            <h4 class="card-title">Spots</h4>
          </div>
          <div
            id="spotMap"
            class="map"/>
        </card>
      </div>
    </div>

  </div>
</template>

<script>
import { StatsCard, Card, Table as NTable, AnimatedNumber } from '@components'
import { API_KEY } from './Maps/API_KEY'
import GoogleMapsLoader from 'google-maps'
GoogleMapsLoader.KEY = API_KEY

export default {
  components: {
    Card,
    NTable,
    StatsCard,
    AnimatedNumber,
  },
  data() {
    return {
      progress: 0,
      gamesTable: [
        {
          title: 'Football at the park',
          subTitle: 'by Saint Laurent',
          sport: 'Football',
          playersNeeded: 3390,
        },
        {
          title: 'Football at the park',
          subTitle: 'by Saint Laurent',
          sport: 'Cricket',
          playersNeeded: 3390,
        },
        {
          title: 'Football at the park',
          subTitle: 'by Saint Laurent',
          sport: 'Yoga',
          playersNeeded: 3390,
        },
      ],
    }
  },
  mounted() {
    GoogleMapsLoader.load(google => {
      this.initRegularMap(google)
    })
  },
  methods: {
    initRegularMap() {
      // Regular Map
      const myLatlng = new window.google.maps.LatLng(40.748817, -73.985428)
      const mapOptions = {
        zoom: 8,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
      }

      const map = new window.google.maps.Map(
        document.getElementById('spotMap'),
        mapOptions
      )

      const marker = new window.google.maps.Marker({
        position: myLatlng,
        title: 'Spot Map!',
      })

      marker.setMap(map)
    },
  },
}
</script>

<style lang="scss" scoped>
.card-map {
  min-height: 450px;
  .map {
    width: 100%;
    height: 400px;
  }
}
</style>
