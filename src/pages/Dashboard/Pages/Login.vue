<template>
  <div class="col-md-4 ml-auto mr-auto">
    <form @submit.prevent>
      <card class="card-login card-plain">

        <div slot="header">
          <div class="logo-container">
            <img
              src="@/assets/img/sportyspots-logo@1x.png"
              alt="">
          </div>
        </div>

        <div>
          <fg-input
            class="no-border form-control-lg"
            placeholder="Email..."
            addon-left-icon="now-ui-icons ui-1_email-85"/>

          <fg-input
            class="no-border form-control-lg"
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
            <h6>
              <router-link
                class="link footer-link"
                to="/register">
                Create Account
              </router-link>
            </h6>
          </div>

          <div class="pull-right">
            <h6><a
              href="#pablo"
              class="link footer-link">Need Help?</a></h6>
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
