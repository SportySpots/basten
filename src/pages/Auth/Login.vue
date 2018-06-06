<template>
  <div class="col-md-4 ml-auto mr-auto">
    <form @submit.prevent="login">
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
            v-validate="modelValidations.email"
            v-model="model.email"
            :error="getError('email')"
            name="email"
            placeholder="Email..."
            addon-left-icon="now-ui-icons ui-1_email-85"/>

          <fg-input
            v-model="model.password"
            name="password"
            type="password"
            placeholder="Password..."
            addon-left-icon="now-ui-icons objects_key-25"
            @keyup.13="login"
          />
          <span
            v-if="loginError"
            class="login-error"
          >
            {{ loginError }}
          </span>
        </div>

        <div slot="footer">
          <n-button
            type="primary"
            round
            block
            @click.native="login"
          >
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
  import router from '../../router'

  export default {
    data: () => ({
      loginError: "",
      model: {
        email: '',
        password: '',
      },
      modelValidations: {
        email: {
          email: true,
        }
      },
    }),
    methods: {
      getError(fieldName) {
        return this.errors.first(fieldName)
      },
      async login() {
        if (await this.$validator.validateAll()) {
          try {
            await this.$store.dispatch('auth/logIn', {
              email: this.model.email, username: this.model.email, password: this.model.password
            })
            router.replace('/dashboard')
            this.loginError = null
          } catch(e) {
            this.loginError = ""+e.toString()
          }
        }
      }
    },
  }
</script>

<style>
  .navbar-nav .nav-item p {
    margin-left: 5px;
    line-height: inherit;
  }
  span.login-error {
    color: red;
  }
</style>
