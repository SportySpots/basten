<template>
  <div class="col-md-4 ml-auto mr-auto">
    <form @submit.prevent>
      <card class="card-login text-center">

        <div slot="header">
          <h4 class="card-title">Login</h4>
          <div class="logo-container">
            <img
              src="@/assets/img/sportyspots-logo@1x.png"
              alt="">
          </div>
        </div>

        <div>
          <fg-input
            placeholder="Email..."
            addon-left-icon="now-ui-icons ui-1_email-85"/>

          <fg-input
            placeholder="Password..."
            addon-left-icon="now-ui-icons objects_key-25"/>
        </div>

        <div slot="footer">
          <n-button
            type="primary"
            round
            block>
            Get Started
          </n-button>
          <div class="pull-left">
            <router-link
              to="/register">
              Create Account
            </router-link>
          </div>
          <div class="pull-right">
            <a
              href="#pablo">
              Need Help?
            </a>
          </div>
        </div>

      </card>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        email: '',
        password: '',
        subscribe: true,
      },
    }
  },
}
</script>

<style>
.navbar-nav .nav-item p {
  margin-left: 5px;
  line-height: inherit;
}
</style>
