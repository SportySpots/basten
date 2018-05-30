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
          href="#pablo">Now UI Dashboard Pro</a>
      </div>

      <template slot="navbar-menu">
        <router-link
          class="nav-item"
          tag="li"
          to="/dashboard">
          <a class="nav-link">
            <i class="now-ui-icons design_app"/>
            Dashboard
          </a>
        </router-link>
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

        <router-link
          class="nav-item"
          tag="li"
          to="/pricing">
          <a class="nav-link">
            <i class="now-ui-icons business_money-coins"/>
            Pricing
          </a>
        </router-link>

        <router-link
          class="nav-item"
          tag="li"
          to="/lock">
          <a class="nav-link">
            <i class="now-ui-icons ui-1_lock-circle-open"/>
            Lock
          </a>
        </router-link>
      </template>

    </navbar>
    <div class="wrapper wrapper-full-page">
      <div
        :class="pageClass"
        class="full-page section-image"
        filter-color="black"
        data-image="/img/bg13.jpg">
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
                  <a href="https://www.creative-tim.com">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright">
              &copy; {{ year }}, Designed by
              <a href="https://www.invisionapp.com/">Invision</a>.
              Coded by
              <a
                href="https://github.com/cristijora"
                target="_blank">Cristi Jora</a>
              and <a
                href="https://www.creative-tim.com/?ref=pdf-vuejs"
                target="_blank"
                rel="noopener">Creative Tim</a>.
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
      let img = require('@/assets/img/bg13.jpg')
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
