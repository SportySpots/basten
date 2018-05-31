<template>
  <card class="card">
    <div
      slot="image"
      class="image">
      <img
        src="@/assets/img/bg5.jpg"
        alt="...">
    </div>
    <div>
      <h5 class="title">Game Title</h5>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div slot="content"><i class="fa fa-calendar"/> Tuesday, 7 July 2018</div>
          <div slot="content"><i class="fa fa-clock-o"/> 12:00 - 13:00</div>
        </div>
        <div class="col-md-6 mb-4">
          <div slot="content"><i class="fa fa-futbol-o"/> Volleyball</div>
          <div slot="content"><i class="fa fa-map-marker"/> Shivaji Park</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">

          <div>
            <h5 class="title">Organizer</h5>
            <div class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="@/assets/img/mike.jpg"
                  alt="...">
              </a>
              Mike Andrew
            </div>
            <p class="description">
              "Come play at the university park"
            </p>
          </div>

          <div>
            <h5 class="title">Attending</h5>
            <span class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="@/assets/img/james.jpg"
                  alt="...">
              </a>
            </span>
            <span class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="@/assets/img/emilyz.jpg"
                  alt="...">
              </a>
            </span>
          </div>

          <div>
            <h5 class="title">Still needed</h5>
            <span class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="@/assets/img/default-avatar.png"
                  alt="...">
              </a>
            </span>
            <span class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="@/assets/img/default-avatar.png"
                  alt="...">
              </a>
            </span>
            <span class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="@/assets/img/default-avatar.png"
                  alt="...">
              </a>
            </span>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <card class="card-map">
            <div
              id="spotMap"
              class="map map-big"/>
          </card>
        </div>
      </div>
    </div>

    <div
      slot="footer"
      class="button-container">
      <div class="row mb-4">
        <div class="col-lg-6 mb-2">
          <n-button
            type="primary"
            round
            block
            size="lg">
            I will join
          </n-button>
        </div>
        <div class="col-lg-6 mb-2">
          <n-button
            type="danger"
            round
            block
            size="lg">
            I won't join
          </n-button>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <h5 class="title">Share</h5>
          <n-button
            type="neutral"
            icon
            size="lg">
            <i class="fa fa-facebook-square"/>
          </n-button>
          <n-button
            type="neutral"
            icon
            size="lg">
            <i class="fa fa-twitter"/>
          </n-button>
        </div>
      </div>

    </div>

  </card>
</template>

<script>
import { API_KEY } from '../Maps/API_KEY'
import GoogleMapsLoader from 'google-maps'
GoogleMapsLoader.KEY = API_KEY

export default {
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
  min-height: 350px;
  .map {
    width: 100%;
    height: 300px;
  }
}
</style>
