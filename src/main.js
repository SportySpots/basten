import Vue from 'vue'
import router from '@router'
import store from '@state/store'
import DashboardPlugin from '@src/dashboard-plugin'
import '@components/_globals'

// Plugins
import App from '@src/app.vue'

// Don't warn about using the dev version of Vue in development
// Vue.config.productionTip = process.env.NODE_ENV === 'production';

// plugin setup
Vue.use(DashboardPlugin)

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// If running inside Cypress
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`
  window.__app__ = app
}

/* We import element-ui variables at the end so they can override the default element-ui colors */
/* eslint-disable */
import '@src/assets/sass/element_variables.scss'
