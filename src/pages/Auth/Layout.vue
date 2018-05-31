<template>
  <div>
    <navbar :show-navbar="showMenu">
      <div class="navbar-wrapper">
        <div
          :class="{toggled: showMenu}"
          class="navbar-toggle">
          <navbar-toggle-button @click.native="toggleNavbar"/>
        </div>
        <a
          class="navbar-brand"
          href="#pablo">SportySpots</a>
      </div>

      <template slot="navbar-menu">
        <router-link
          class="nav-item"
          tag="li"
          to="/register">
          <a class="nav-link">
            <i class="now-ui-icons tech_mobile"/>
            Register
          </a>
        </router-link>
        <router-link
          class="nav-item"
          tag="li"
          to="/login">
          <a class="nav-link">
            <i class="now-ui-icons users_circle-08"/>
            Login
          </a>
        </router-link>
      </template>

    </navbar>
    <div class="wrapper wrapper-full-page">
      <div
        :class="pageClass"
        class="full-page section-image"
        filter-color="black"
        data-image="/img/unsplash-emile-victor-portenart-108608-unsplash.jpg">
        <div class="content">
          <div class="container">
            <zoom-center-transition
              :duration="pageTransitionDuration"
              mode="out-in">
              <router-view/>
            </zoom-center-transition>
          </div>
        </div>
        <footer class="footer">
          <div class="container-fluid">
            <nav>
              <ul>
                <li>
                  <a href="https://sportyspots.com/about-us">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://sportyspots.com/privacy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="https://blog.sportyspots.com">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright">
              &copy; {{ year }}, Designed and Crafted with love in Amsterdam.
            </div>
          </div>
        </footer>

        <div
          :style="imageStyles"
          class="full-page-background"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, NavbarToggleButton } from '@components'
import { ZoomCenterTransition } from 'vue2-transitions'

export default {
  components: {
    Navbar,
    NavbarToggleButton,
    ZoomCenterTransition,
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: 'login-page',
    }
  },
  computed: {
    imageStyles() {
      let img = require('@/assets/img/unsplash-emile-victor-portenart-108608-unsplash.jpg')
      return {
        backgroundImage: `url(${img})`,
      }
    },
  },
  watch: {
    $route() {
      this.setPageClass()
    },
  },
  beforeDestroy() {
    this.closeMenu()
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open')
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      document.body.classList.remove('nav-open')
      this.showMenu = false
    },
    setPageClass() {
      this.pageClass = `${this.$route.name}-page`.toLowerCase()
    },
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu()
      setTimeout(() => {
        next()
      }, this.menuTransitionDuration)
    } else {
      next()
    }
  },
}
</script>

<style lang="scss">
// stylelint-disable scss/dollar-variable-pattern
$scaleSize: 0.8;

@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}
.wrapper-full-page .zoomIn {
  animation-name: zoomIn8;
}

@keyframes zoomOut8 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}
.wrapper-full-page .zoomOut {
  animation-name: zoomOut8;
}
</style>
