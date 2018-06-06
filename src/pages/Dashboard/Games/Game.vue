<template>
  <card class="card">
    <div
      slot="image"
      class="image">
      <img
        v-if="spot.images.length > 0"
        :src="getImageURL(spot.images[0].image)"
        class="spot-image"
        alt="...">
    </div>
    <div>
      <h5 class="title">{{ game.name }}</h5>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div slot="content"><i class="fa fa-calendar"/> {{ game.start_time | momentDate }} </div>
          <div slot="content"><i class="fa fa-clock-o"/> {{ game.start_time | momentTime }} - {{ game.stop_time | momentTime }}</div>
        </div>
        <div class="col-md-6 mb-4">
          <div slot="content"><i class="fa fa-futbol-o"/> {{ sport.name }}</div>
          <div slot="content"><i class="fa fa-map-marker"/> {{ spot.name }}</div>
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
                  src="@/assets/img/default-avatar.png"
                  alt="...">
              </a>
              {{ game.organizer.first_name }} {{ game.organizer.last_name }}
            </div>
            <p class="description">
              {{ game.description }}
            </p>
          </div>

          <div v-if="players.length > 0">
            <h5 class="title">Attending</h5>
            <span
              v-for="user in players"
              :key="user.uuid"
              class="author"
            >
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="@/assets/img/default-avatar.png"
                  alt="...">
              </a>
            </span>
          </div>

          <div v-if="neededPlayers > 0">
            <h5 class="title">Still needed</h5>
            <span
              v-for="n in neededPlayers"
              :key="n"
              class="author"
            >
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
        <div class="col-lg-12 mb-2">
          <input
            v-model="first_name"
            type="text"
            placeholder="First name"
            title="First name"
          >
        </div>
        <div class="col-lg-12 mb-2">
          <input
            v-model="last_name"
            type="text"
            placeholder="Last name"
            title="Last name"
          >
        </div>
        <div class="col-lg-12 mb-2">
          <input
            v-model="email"
            type="text"
            placeholder="Email"
            title="Email"
          >
        </div>
      </div>
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
  </div></card>
</template>

<script>
import { API_KEY } from '../Maps/API_KEY'
import GoogleMapsLoader from 'google-maps'
import moment from 'moment'
import { debounce } from 'lodash'

GoogleMapsLoader.KEY = API_KEY

export default {
  filters: {
    momentDate(date) { return moment(date).format('dddd DD-MM-YYYY') },
    momentTime(date) { return moment(date).format('HH:mm') },
  },
  data: () => ({
    first_name: "",
    last_name: "",
    email: ""
  }),
  computed: {
    game() { return this.$route.params.game },
    sport() { return this.game.sport },
    spot() { return this.game.spot },
    players() { return this.game.attendees.filter(att => att.status === 'attending')},
    neededPlayers() { return Math.min(0, this.game.capacity - this.players.length) },
  },
  watch: {
    email: debounce(async function(email) {
      console.log(email)
    }, 1000)
  },
  mounted() {
    GoogleMapsLoader.load(google => {
      this.initRegularMap(google)
    })
  },
  methods: {
    getImageURL(image) {
      return image
    },
    initRegularMap() {
      // Regular Map
      const myLatlng = new window.google.maps.LatLng(this.spot.address.lat, this.spot.address.lng)
      const mapOptions = {
        zoom: 13,
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
  img.spot-image {
    object-fit: cover;
    width: 100%;
    max-height: 200px;
  }
  input[type='text'] {
    width: 100%;
  }
  .card-map {
    min-height: 350px;
    .map {
      width: 100%;
      height: 300px;
    }

  }
</style>
