<template>
  <div class="row">
    <div class="col-lg-5 ml-auto">
      <div class="info-area info-horizontal mt-5">
        <div class="icon icon-primary">
          <i class="now-ui-icons ui-1_zoom-bold"/>
        </div>
        <div class="description">
          <h5 class="info-title">Ontdek</h5>
          <p class="description">
            Krijg toegang tot een compleet overzicht van alle sportplekken bij jou in de buurt.
          </p>
        </div>
      </div>

      <div class="info-area info-horizontal">
        <div class="icon icon-primary">
          <i class="now-ui-icons ui-1_calendar-60"/>
        </div>
        <div class="description">
          <h5 class="info-title">Organiseer</h5>
          <p class="description">
            Organiseer een potje sport met vrienden of andere sporters.
          </p>
        </div>
      </div>

      <div class="info-area info-horizontal">
        <div class="icon icon-info">
          <i class="now-ui-icons sport_user-run"/>
        </div>
        <div class="description">
          <h5 class="info-title">Doe mee</h5>
          <p class="description">
            Doe laagdrempelig mee met verschillende type sport events.
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 mr-auto">
      <card
        class="card-signup text-center"
        no-footer-line>

        <template slot="header">
          <h4 class="card-title">Register</h4>
          <div class="social">
            <button class="btn btn-icon btn-round btn-facebook">
              <i class="fa fa-facebook"/>
            </button>
            <button class="btn btn-icon btn-round btn-twitter">
              <i class="fa fa-twitter"/>
            </button>
            <h5 class="card-description"> or be classical </h5>
          </div>
        </template>

        <form @submit.prevent>

          <fg-input
            placeholder="First Name..."
            addon-left-icon="now-ui-icons users_circle-08"/>

          <fg-input
            placeholder="Last Name..."
            addon-left-icon="now-ui-icons users_circle-08"/>

          <fg-input
            placeholder="Email..."
            addon-left-icon="now-ui-icons ui-1_email-85"/>

          <fg-input
            placeholder="Password..."
            addon-left-icon="now-ui-icons objects_key-25"/>

          <checkbox class="text-left">
            I agree to the <a href="#something">terms and conditions</a>.
          </checkbox>
        </form>
        <a
          slot="footer"
          href="#pablo"
          class="btn btn-primary btn-round btn-lg">Get Started</a>

      </card>
    </div>
  </div>
</template>
<script>
import { Checkbox } from '@components'
export default {
  components: {
    Checkbox,
  },
}
</script>
