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

      <ul class="navbar-nav">
        <drop-down
          tag="li"
          position="right"
          class="nav-item"
          icon="now-ui-icons location_world">
          <a
            class="dropdown-item"
            href="#">English</a>
          <a
            class="dropdown-item"
            href="#">Dutch (Coming Soon)</a>
        </drop-down>
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
