<template>
  <navbar :show-navbar="showNavbar">
    <div class="navbar-wrapper">
      <div
        :class="{toggled: $sidebar.showSidebar}"
        class="navbar-toggle">
        <navbar-toggle-button @click.native="toggleSidebar"/>
      </div>
      <a
        class="navbar-brand"
        href="#pablo">
        {{ $route.name }}
      </a>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navigation"
      aria-controls="navigation-index"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleNavbar">
      <span class="navbar-toggler-bar navbar-kebab"/>
      <span class="navbar-toggler-bar navbar-kebab"/>
      <span class="navbar-toggler-bar navbar-kebab"/>
    </button>

    <template slot="navbar-menu">

      <form>
        <div class="input-group no-border">
          <fg-input
            placeholder="Search..."
            addon-right-icon="now-ui-icons ui-1_zoom-bold"/>
        </div>
      </form>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#pablo">
            <i class="now-ui-icons media-2_sound-wave"/>
            <p>
              <span class="d-lg-none d-md-block">Stats</span>
            </p>
          </a>
        </li>
        <drop-down
          tag="li"
          position="right"
          class="nav-item"
          icon="now-ui-icons location_world">

          <a
            class="dropdown-item"
            href="#">Action</a>
          <a
            class="dropdown-item"
            href="#">Another action</a>
          <a
            class="dropdown-item"
            href="#">Something else here</a>
        </drop-down>

        <li class="nav-item">
          <a
            class="nav-link"
            href="#pablo">
            <i class="now-ui-icons users_single-02"/>
            <p>
              <span class="d-lg-none d-md-block">Account</span>
            </p>
          </a>
        </li>
      </ul>

    </template>
  </navbar>
</template>
<script>
import { RouteBreadCrumb, Navbar, NavbarToggleButton } from '@components'
import { CollapseTransition } from 'vue2-transitions'

export default {
  components: {
    RouteBreadCrumb,
    Navbar,
    NavbarToggleButton,
    CollapseTransition,
  },
  data() {
    return {
      activeNotifications: false,
      showNavbar: false,
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route
      return this.capitalizeFirstLetter(name)
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown() {
      this.activeNotifications = false
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false)
    },
  },
}
</script>
